const db = require('../config/database');

class MealPlannerService {
    // Generate weekly meal plan
    async generateWeeklyPlan(userId, startDate, calorieGoal = 2000) {
        const query = `
            SELECT generate_weekly_meal_plan($1, $2, $3) as meal_plan_id
        `;
        const result = await db.query(query, [userId, startDate, calorieGoal]);
        const mealPlanId = result.rows[0].meal_plan_id;
        
        // Return full plan details
        return await this.getMealPlanDetails(mealPlanId);
    }

    // Get meal plan with all meals
    async getMealPlanDetails(mealPlanId) {
        const query = `
            SELECT 
                mp.*,
                json_agg(
                    json_build_object(
                        'date', wms.scheduled_date,
                        'meal_type', wms.meal_type,
                        'recipe', json_build_object(
                            'id', wms.recipe_title,
                            'title', wms.recipe_title,
                            'calories', wms.calories,
                            'cooking_time', wms.cooking_time,
                            'difficulty', wms.difficulty,
                            'image_url', wms.image_url
                        )
                    ) ORDER BY wms.scheduled_date, wms.meal_type
                ) as meals
            FROM meal_plans mp
            LEFT JOIN weekly_meal_summary wms ON mp.id = wms.meal_plan_id
            WHERE mp.id = $1
            GROUP BY mp.id
        `;
        const result = await db.query(query, [mealPlanId]);
        return result.rows[0];
    }

    // Replace a meal in the plan
    async replaceMeal(mealPlanId, date, mealType, newRecipeId) {
        const query = `
            UPDATE meal_plan_items
            SET recipe_id = $1, updated_at = CURRENT_TIMESTAMP
            WHERE meal_plan_id = $2 
              AND scheduled_date = $3 
              AND meal_type_id = (SELECT id FROM meal_types WHERE name = $4)
            RETURNING *
        `;
        const result = await db.query(query, [newRecipeId, mealPlanId, date, mealType]);
        return result.rows[0];
    }

    // Get shopping list from meal plan
    async getShoppingList(mealPlanId) {
        const query = `
            SELECT * FROM get_shopping_list($1)
        `;
        const result = await db.query(query, [mealPlanId]);
        return result.rows;
    }

    // Get weekly nutrition summary
    async getNutritionSummary(mealPlanId) {
        const query = `
            SELECT 
                mpi.scheduled_date,
                SUM(r.calories) as total_calories,
                AVG(r.calories) as avg_calories,
                SUM(r.protein) as total_protein,
                SUM(r.carbs) as total_carbs,
                SUM(r.fats) as total_fats,
                COUNT(r.id) as meals_count
            FROM meal_plan_items mpi
            JOIN recipes r ON mpi.recipe_id = r.id
            WHERE mpi.meal_plan_id = $1
            GROUP BY mpi.scheduled_date
            ORDER BY mpi.scheduled_date
        `;
        const result = await db.query(query, [mealPlanId]);
        return result.rows;
    }

    // Copy meal plan to next week
    async copyToNextWeek(mealPlanId) {
        return await db.transaction(async (client) => {
            // Get current plan
            const currentPlan = await client.query(
                'SELECT * FROM meal_plans WHERE id = $1',
                [mealPlanId]
            );
            
            if (!currentPlan.rows[0]) throw new Error('Meal plan not found');
            
            const current = currentPlan.rows[0];
            const nextWeekStart = new Date(current.week_start_date);
            nextWeekStart.setDate(nextWeekStart.getDate() + 7);
            
            // Create new plan
            const newPlan = await client.query(`
                INSERT INTO meal_plans (user_id, week_start_date, daily_calorie_goal)
                VALUES ($1, $2, $3)
                RETURNING id
            `, [current.user_id, nextWeekStart, current.daily_calorie_goal]);
            
            const newPlanId = newPlan.rows[0].id;
            
            // Copy all meal items
            await client.query(`
                INSERT INTO meal_plan_items (meal_plan_id, recipe_id, meal_type_id, scheduled_date, notes)
                SELECT 
                    $1,
                    recipe_id,
                    meal_type_id,
                    scheduled_date + INTERVAL '7 days',
                    notes
                FROM meal_plan_items
                WHERE meal_plan_id = $2
            `, [newPlanId, mealPlanId]);
            
            return newPlanId;
        });
    }
}

module.exports = new MealPlannerService();