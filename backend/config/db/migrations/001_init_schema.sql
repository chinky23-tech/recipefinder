-- =====================================================
-- RECIPE FINDER DATABASE SCHEMA
-- PostgreSQL 16
-- =====================================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";  -- For fuzzy search
CREATE EXTENSION IF NOT EXISTS "pgcrypto"; -- For password hashing

-- =====================================================
-- ENUM TYPES
-- =====================================================

CREATE TYPE difficulty_level AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE meal_type_enum AS ENUM ('breakfast', 'lunch', 'dinner', 'evening_snacks');

-- =====================================================
-- CORE TABLES
-- =====================================================

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    avatar_url TEXT,
    
    -- Preferences (JSON for flexibility)
    preferences JSONB DEFAULT '{
        "dietary_restrictions": [],
        "favorite_cuisines": [],
        "disliked_ingredients": [],
        "calorie_goal": 2000,
        "skill_level": "beginner",
        "allergies": []
    }'::jsonb,
    
    -- Metadata
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Indexes
    INDEX idx_users_email (email),
    INDEX idx_users_active (is_active)
);

-- Recipes table
CREATE TABLE recipes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(220) UNIQUE NOT NULL,
    description TEXT,
    summary VARCHAR(500),
    
    -- Time metrics
    prep_time INTEGER DEFAULT 0,
    cooking_time INTEGER NOT NULL,
    total_time INTEGER GENERATED ALWAYS AS (prep_time + cooking_time) STORATED,
    
    -- Difficulty & servings
    difficulty difficulty_level DEFAULT 'easy',
    servings INTEGER DEFAULT 2,
    
    -- Nutritional information
    calories INTEGER,
    protein DECIMAL(5,2),
    carbs DECIMAL(5,2),
    fats DECIMAL(5,2),
    fiber DECIMAL(5,2),
    
    -- Media
    image_url TEXT,
    video_url TEXT,
    thumbnail_url TEXT,
    
    -- Flags
    is_vegetarian BOOLEAN DEFAULT FALSE,
    is_vegan BOOLEAN DEFAULT FALSE,
    is_gluten_free BOOLEAN DEFAULT FALSE,
    is_one_pot BOOLEAN DEFAULT FALSE,
    is_no_cook BOOLEAN DEFAULT FALSE,
    is_quick BOOLEAN GENERATED ALWAYS AS (cooking_time <= 20) STORED,
    
    -- Statistics
    view_count INTEGER DEFAULT 0,
    favorite_count INTEGER DEFAULT 0,
    rating_avg DECIMAL(3,2) DEFAULT 0,
    rating_count INTEGER DEFAULT 0,
    
    -- Foreign keys
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Indexes for performance
    INDEX idx_recipes_search (title, description),
    INDEX idx_recipes_cooking_time (cooking_time),
    INDEX idx_recipes_difficulty (difficulty),
    INDEX idx_recipes_calories (calories),
    INDEX idx_recipes_flags (is_one_pot, is_no_cook, is_quick),
    INDEX idx_recipes_rating (rating_avg DESC),
    INDEX idx_recipes_created (created_at DESC)
);

-- =====================================================
-- LOOKUP TABLES
-- =====================================================

-- Meal types
CREATE TABLE meal_types (
    id SERIAL PRIMARY KEY,
    name meal_type_enum UNIQUE NOT NULL,
    display_name VARCHAR(50),
    icon VARCHAR(50),
    display_order INTEGER
);

INSERT INTO meal_types (name, display_name, icon, display_order) VALUES 
    ('breakfast', 'Breakfast', '🌅', 1),
    ('lunch', 'Lunch', '☀️', 2),
    ('dinner', 'Dinner', '🌙', 3),
    ('evening_snacks', 'Evening Snacks', '🍿', 4);

-- Cuisines
CREATE TABLE cuisines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(50)
);

INSERT INTO cuisines (name, description) VALUES 
    ('italian', 'Italian cuisine'),
    ('indian', 'Indian cuisine'),
    ('english', 'English/British cuisine'),
    ('chinese', 'Chinese cuisine'),
    ('mexican', 'Mexican cuisine'),
    ('japanese', 'Japanese cuisine');

-- Moods
CREATE TABLE moods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    emoji VARCHAR(10),
    description TEXT
);

INSERT INTO moods (name, emoji) VALUES 
    ('happy', '😊'),
    ('healthy', '💪'),
    ('comfort', '🛋️'),
    ('energetic', '⚡');

-- =====================================================
-- RELATIONSHIP TABLES
-- =====================================================

-- Recipe meal types
CREATE TABLE recipe_meal_types (
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    meal_type_id INTEGER REFERENCES meal_types(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, meal_type_id)
);

-- Recipe cuisines
CREATE TABLE recipe_cuisines (
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    cuisine_id INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, cuisine_id)
);

-- Recipe moods
CREATE TABLE recipe_moods (
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    mood_id INTEGER REFERENCES moods(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, mood_id)
);

-- =====================================================
-- INGREDIENTS
-- =====================================================

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(50),
    unit VARCHAR(50)
);

CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
    quantity DECIMAL(8,2),
    unit VARCHAR(50),
    notes TEXT,
    is_optional BOOLEAN DEFAULT FALSE,
    UNIQUE(recipe_id, ingredient_id)
);

-- =====================================================
-- INSTRUCTIONS
-- =====================================================

CREATE TABLE recipe_instructions (
    id SERIAL PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    step_number INTEGER NOT NULL,
    instruction TEXT NOT NULL,
    image_url TEXT,
    timer_minutes INTEGER,
    UNIQUE(recipe_id, step_number)
);

-- =====================================================
-- MEAL PLANNER
-- =====================================================

CREATE TABLE meal_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) DEFAULT 'Weekly Meal Plan',
    week_start_date DATE NOT NULL,
    week_end_date DATE GENERATED ALWAYS AS (week_start_date + INTERVAL '6 days') STORED,
    daily_calorie_goal INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, week_start_date),
    INDEX idx_meal_plans_user (user_id),
    INDEX idx_meal_plans_dates (week_start_date, week_end_date)
);

CREATE TABLE meal_plan_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meal_plan_id UUID REFERENCES meal_plans(id) ON DELETE CASCADE,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    meal_type_id INTEGER REFERENCES meal_types(id),
    scheduled_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_meal_plan_items_plan (meal_plan_id),
    INDEX idx_meal_plan_items_date (scheduled_date),
    UNIQUE(meal_plan_id, scheduled_date, meal_type_id)
);

-- =====================================================
-- USER INTERACTIONS
-- =====================================================

CREATE TABLE user_favorites (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, recipe_id)
);

CREATE TABLE recipe_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(recipe_id, user_id),
    INDEX idx_reviews_recipe (recipe_id, rating)
);

-- =====================================================
-- SHOPPING LISTS
-- =====================================================

CREATE TABLE shopping_lists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    meal_plan_id UUID REFERENCES meal_plans(id) ON DELETE CASCADE,
    name VARCHAR(100) DEFAULT 'Shopping List',
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shopping_list_items (
    id SERIAL PRIMARY KEY,
    shopping_list_id UUID REFERENCES shopping_lists(id) ON DELETE CASCADE,
    ingredient_name VARCHAR(100) NOT NULL,
    quantity DECIMAL(8,2),
    unit VARCHAR(50),
    is_checked BOOLEAN DEFAULT FALSE,
    category VARCHAR(50)
);

-- =====================================================
-- FULL TEXT SEARCH
-- =====================================================

-- Create search vector column
ALTER TABLE recipes ADD COLUMN search_vector tsvector;
CREATE INDEX recipes_search_idx ON recipes USING GIN(search_vector);

-- Create trigger to update search vector
CREATE OR REPLACE FUNCTION recipes_search_vector_update() RETURNS trigger AS $$
BEGIN
    NEW.search_vector := 
        setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
        setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER recipes_search_vector_update
    BEFORE INSERT OR UPDATE ON recipes
    FOR EACH ROW EXECUTE FUNCTION recipes_search_vector_update();

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- Recipe details view (joins all relationships)
CREATE VIEW recipe_details AS
SELECT 
    r.*,
    array_agg(DISTINCT mt.name) as meal_types,
    array_agg(DISTINCT c.name) as cuisines,
    array_agg(DISTINCT m.name) as moods,
    (
        SELECT json_agg(
            json_build_object(
                'id', ri.id,
                'quantity', ri.quantity,
                'unit', ri.unit,
                'ingredient', i.name
            )
        )
        FROM recipe_ingredients ri
        JOIN ingredients i ON ri.ingredient_id = i.id
        WHERE ri.recipe_id = r.id
    ) as ingredients,
    (
        SELECT json_agg(
            json_build_object(
                'step', instr.step_number,
                'instruction', instr.instruction,
                'timer', instr.timer_minutes
            )
            ORDER BY instr.step_number
        )
        FROM recipe_instructions instr
        WHERE instr.recipe_id = r.id
    ) as instructions
FROM recipes r
LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
LEFT JOIN meal_types mt ON rmt.meal_type_id = mt.id
LEFT JOIN recipe_cuisines rc ON r.id = rc.recipe_id
LEFT JOIN cuisines c ON rc.cuisine_id = c.id
LEFT JOIN recipe_moods rm ON r.id = rm.recipe_id
LEFT JOIN moods m ON rm.mood_id = m.id
GROUP BY r.id;

-- Weekly meal plan summary view
CREATE VIEW weekly_meal_summary AS
SELECT 
    mp.id as meal_plan_id,
    mp.user_id,
    mp.week_start_date,
    mpi.scheduled_date,
    mt.name as meal_type,
    r.title as recipe_title,
    r.calories,
    r.cooking_time,
    r.difficulty,
    r.image_url
FROM meal_plans mp
JOIN meal_plan_items mpi ON mp.id = mpi.meal_plan_id
JOIN recipes r ON mpi.recipe_id = r.id
JOIN meal_types mt ON mpi.meal_type_id = mt.id;

-- =====================================================
-- FUNCTIONS & STORED PROCEDURES
-- =====================================================

-- Function to get recipes with complex filters
CREATE OR REPLACE FUNCTION get_filtered_recipes(
    p_meal_type TEXT DEFAULT NULL,
    p_cuisine TEXT DEFAULT NULL,
    p_mood TEXT DEFAULT NULL,
    p_max_time INTEGER DEFAULT NULL,
    p_max_calories INTEGER DEFAULT NULL,
    p_difficulty TEXT DEFAULT NULL,
    p_is_one_pot BOOLEAN DEFAULT NULL,
    p_is_no_cook BOOLEAN DEFAULT NULL,
    p_limit INTEGER DEFAULT 20,
    p_offset INTEGER DEFAULT 0
)
RETURNS TABLE(
    id UUID,
    title VARCHAR,
    slug VARCHAR,
    description TEXT,
    cooking_time INTEGER,
    difficulty difficulty_level,
    calories INTEGER,
    image_url TEXT,
    is_one_pot BOOLEAN,
    is_no_cook BOOLEAN,
    is_quick BOOLEAN,
    rating_avg DECIMAL,
    meal_types TEXT[],
    cuisines TEXT[],
    moods TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        r.id, r.title, r.slug, r.description,
        r.cooking_time, r.difficulty, r.calories,
        r.image_url, r.is_one_pot, r.is_no_cook, r.is_quick,
        r.rating_avg,
        array_agg(DISTINCT mt.name) FILTER (WHERE mt.name IS NOT NULL),
        array_agg(DISTINCT c.name) FILTER (WHERE c.name IS NOT NULL),
        array_agg(DISTINCT m.name) FILTER (WHERE m.name IS NOT NULL)
    FROM recipes r
    LEFT JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
    LEFT JOIN meal_types mt ON rmt.meal_type_id = mt.id
    LEFT JOIN recipe_cuisines rc ON r.id = rc.recipe_id
    LEFT JOIN cuisines c ON rc.cuisine_id = c.id
    LEFT JOIN recipe_moods rm ON r.id = rm.recipe_id
    LEFT JOIN moods m ON rm.mood_id = m.id
    WHERE 
        (p_meal_type IS NULL OR mt.name::text = p_meal_type)
        AND (p_cuisine IS NULL OR c.name = p_cuisine)
        AND (p_mood IS NULL OR m.name = p_mood)
        AND (p_max_time IS NULL OR r.cooking_time <= p_max_time)
        AND (p_max_calories IS NULL OR r.calories <= p_max_calories)
        AND (p_difficulty IS NULL OR r.difficulty::text = p_difficulty)
        AND (p_is_one_pot IS NULL OR r.is_one_pot = p_is_one_pot)
        AND (p_is_no_cook IS NULL OR r.is_no_cook = p_is_no_cook)
    GROUP BY r.id
    ORDER BY r.rating_avg DESC
    LIMIT p_limit
    OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Function to generate weekly meal plan
CREATE OR REPLACE FUNCTION generate_weekly_meal_plan(
    p_user_id UUID,
    p_start_date DATE,
    p_calorie_goal INTEGER DEFAULT 2000
)
RETURNS UUID AS $$
DECLARE
    v_meal_plan_id UUID;
BEGIN
    -- Create meal plan
    INSERT INTO meal_plans (user_id, week_start_date, daily_calorie_goal)
    VALUES (p_user_id, p_start_date, p_calorie_goal)
    RETURNING id INTO v_meal_plan_id;
    
    -- Generate meals for 7 days
    FOR day IN 0..6 LOOP
        FOR meal_type IN SELECT id FROM meal_types LOOP
            -- Insert recommended recipe based on preferences
            INSERT INTO meal_plan_items (meal_plan_id, recipe_id, meal_type_id, scheduled_date)
            SELECT 
                v_meal_plan_id,
                r.id,
                meal_type.id,
                p_start_date + day
            FROM recipes r
            JOIN recipe_meal_types rmt ON r.id = rmt.recipe_id
            WHERE rmt.meal_type_id = meal_type.id
            AND (p_calorie_goal IS NULL OR r.calories <= p_calorie_goal / 4)
            ORDER BY r.rating_avg DESC
            LIMIT 1;
        END LOOP;
    END LOOP;
    
    RETURN v_meal_plan_id;
END;
$$ LANGUAGE plpgsql;

-- Function to get shopping list from meal plan
CREATE OR REPLACE FUNCTION get_shopping_list(p_meal_plan_id UUID)
RETURNS TABLE(
    ingredient_name VARCHAR,
    total_quantity DECIMAL,
    unit VARCHAR,
    category VARCHAR
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        i.name,
        SUM(ri.quantity) as total_quantity,
        i.unit,
        i.category
    FROM meal_plan_items mpi
    JOIN recipes r ON mpi.recipe_id = r.id
    JOIN recipe_ingredients ri ON r.id = ri.recipe_id
    JOIN ingredients i ON ri.ingredient_id = i.id
    WHERE mpi.meal_plan_id = p_meal_plan_id
    GROUP BY i.id, i.name, i.unit, i.category
    ORDER BY i.category, i.name;
END;
$$ LANGUAGE plpgsql;