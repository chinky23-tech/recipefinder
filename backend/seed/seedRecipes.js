import dotenv from 'dotenv';
dotenv.config();

import { sequelize, Recipe } from '../models/index.js';

const sampleRecipes = [
  // ─── Breakfast ─────────────────────────────────────────────
  {
    title: 'Creamy Pasta Carbonara',
    description: 'A classic Italian pasta dish with eggs, cheese, and pancetta',
    ingredients: ['400g spaghetti', '200g pancetta', '4 egg yolks', '100g Pecorino Romano', '100g Parmigiano', 'Black pepper'],
    instructions: ['Cook pasta al dente', 'Fry pancetta until crispy', 'Mix egg yolks with cheese', 'Toss hot pasta with pancetta', 'Add egg mixture off heat', 'Serve immediately'],
    category: 'breakfast',
    prepTime: '30 min',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
  },
  {
    title: 'Avocado Toast Deluxe',
    description: 'Healthy breakfast with avocado, cherry tomatoes, and spices',
    ingredients: ['2 slices sourdough bread', '1 ripe avocado', 'Cherry tomatoes', 'Red pepper flakes', 'Lemon juice', 'Salt & pepper', 'Olive oil'],
    instructions: ['Toast the sourdough bread', 'Mash avocado with lemon juice', 'Spread avocado on toast', 'Top with sliced cherry tomatoes', 'Drizzle with olive oil', 'Season with salt, pepper, and red pepper flakes'],
    category: 'breakfast',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
  },
  {
    title: 'Mixed Berry Smoothie Bowl',
    description: 'Antioxidant-rich berries blended with yogurt and topped with granola',
    ingredients: ['1 cup mixed berries', '1 banana', '1/2 cup Greek yogurt', '1/4 cup granola', 'Honey', 'Chia seeds', 'Coconut flakes'],
    instructions: ['Blend berries, banana, and yogurt until smooth', 'Pour into a bowl', 'Top with granola, chia seeds, and coconut', 'Drizzle with honey', 'Serve immediately'],
    category: 'breakfast',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800',
  },
  {
    title: 'Classic French Omelette',
    description: 'Silky smooth omelette with herbs and cheese',
    ingredients: ['3 eggs', '1 tbsp butter', 'Fresh chives', 'Gruyère cheese', 'Salt & pepper'],
    instructions: ['Beat eggs with salt and pepper', 'Melt butter in non-stick pan', 'Pour in eggs, stir gently', 'Add cheese and herbs when almost set', 'Fold omelette and slide onto plate'],
    category: 'breakfast',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
  },

  // ─── Lunch ─────────────────────────────────────────────────
  {
    title: 'Spicy Chicken Stir Fry',
    description: 'Tender chicken with colorful vegetables in savory sauce',
    ingredients: ['500g chicken breast', 'Bell peppers', 'Broccoli', 'Soy sauce', 'Ginger', 'Garlic', 'Sesame oil', 'Chili flakes'],
    instructions: ['Slice chicken and vegetables', 'Heat sesame oil in wok', 'Stir-fry chicken until golden', 'Add vegetables and cook 3 minutes', 'Pour in soy sauce and seasonings', 'Serve over steamed rice'],
    category: 'lunch',
    prepTime: '20 min',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
  },
  {
    title: 'Vegan Buddha Bowl',
    description: 'Nutritious bowl with quinoa, roasted veggies, and tahini dressing',
    ingredients: ['1 cup quinoa', 'Sweet potato', 'Chickpeas', 'Kale', 'Avocado', 'Tahini', 'Lemon juice'],
    instructions: ['Cook quinoa according to package', 'Roast sweet potato and chickpeas', 'Massage kale with olive oil', 'Assemble bowl with all ingredients', 'Drizzle with tahini-lemon dressing'],
    category: 'lunch',
    prepTime: '25 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
  },
  {
    title: 'Mediterranean Wrap',
    description: 'Fresh wrap with hummus, falafel, and crunchy vegetables',
    ingredients: ['Large tortilla', 'Hummus', '4 falafel balls', 'Cucumber', 'Tomato', 'Red onion', 'Feta cheese', 'Mixed greens'],
    instructions: ['Warm the tortilla', 'Spread hummus generously', 'Place falafel and vegetables', 'Crumble feta on top', 'Roll tightly and slice in half'],
    category: 'lunch',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800',
  },
  {
    title: 'Hearty Lentil Soup',
    description: 'Comforting soup with lentils, carrots, and spices',
    ingredients: ['2 cups red lentils', '2 carrots', '1 onion', '3 cloves garlic', 'Cumin', 'Turmeric', 'Vegetable broth', 'Lemon juice'],
    instructions: ['Sauté onion and garlic', 'Add carrots and spices', 'Pour in lentils and broth', 'Simmer for 25 minutes', 'Blend partially for creamy texture', 'Finish with lemon juice'],
    category: 'lunch',
    prepTime: '40 min',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800',
  },

  // ─── Dinner ────────────────────────────────────────────────
  {
    title: 'Herb-Crusted Grilled Salmon',
    description: 'Fresh salmon fillet with lemon herb crust and asparagus',
    ingredients: ['4 salmon fillets', 'Fresh dill', 'Parsley', 'Lemon', 'Garlic', 'Olive oil', 'Asparagus', 'Salt & pepper'],
    instructions: ['Mix herbs, garlic, and olive oil', 'Coat salmon with herb mixture', 'Grill salmon 4-5 minutes per side', 'Grill asparagus alongside', 'Squeeze fresh lemon over fish', 'Serve immediately'],
    category: 'dinner',
    prepTime: '25 min',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
  },
  {
    title: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate cake with ganache frosting',
    ingredients: ['2 cups flour', '2 cups sugar', '3/4 cup cocoa powder', '2 eggs', '1 cup buttermilk', '1/2 cup oil', 'Dark chocolate', 'Heavy cream'],
    instructions: ['Mix dry ingredients', 'Combine wet ingredients', 'Fold together gently', 'Bake at 350°F for 30-35 minutes', 'Make ganache with chocolate and cream', 'Frost cooled cake with ganache'],
    category: 'dinner',
    prepTime: '90 min',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
  },
  {
    title: 'Chocolate Avocado Mousse',
    description: 'Creamy, rich vegan dessert made with avocado and cocoa',
    ingredients: ['2 ripe avocados', '1/4 cup cocoa powder', '1/4 cup maple syrup', '1/4 cup almond milk', '1 tsp vanilla', 'Pinch of salt'],
    instructions: ['Blend avocados until smooth', 'Add cocoa powder and mix', 'Pour in maple syrup and almond milk', 'Add vanilla and salt', 'Blend until silky', 'Chill for 30 minutes before serving'],
    category: 'dinner',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800',
  },
  {
    title: 'Thai Green Curry',
    description: 'Aromatic coconut curry with vegetables and fragrant Thai basil',
    ingredients: ['Green curry paste', 'Coconut milk', 'Tofu or chicken', 'Bamboo shoots', 'Thai basil', 'Bell pepper', 'Fish sauce', 'Jasmine rice'],
    instructions: ['Fry curry paste in oil until fragrant', 'Add coconut milk and bring to simmer', 'Add protein and vegetables', 'Season with fish sauce', 'Garnish with Thai basil', 'Serve over jasmine rice'],
    category: 'dinner',
    prepTime: '35 min',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
  },
];

const seedDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to PostgreSQL.');

    await sequelize.sync({ alter: true });
    console.log('✅ Models synced.');

    // Check if recipes already exist
    const existingCount = await Recipe.count();
    if (existingCount > 0) {
      console.log(`⚠️  Database already has ${existingCount} recipes. Skipping seed.`);
      process.exit(0);
    }

    // Seed recipes
    await Recipe.bulkCreate(sampleRecipes);
    console.log(`✅ Seeded ${sampleRecipes.length} recipes successfully!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();
