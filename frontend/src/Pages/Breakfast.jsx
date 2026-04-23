import React, { useState } from 'react';

export default function Breakfast() {
  const [recipeType, setRecipeType] = useState('vegan');

  const recipes = {
    vegan: [
      {
        id: 1,
        title: 'Tofu Scramble Bowl',
        calories: 320,
        description: 'Protein-rich tofu scramble with spinach, cherry tomatoes, and turmeric.',
        ingredients: 'Tofu, spinach, tomatoes, turmeric, coconut milk, garlic, onion',
        image: 'https://images.unsplash.com/photo-1542444459-db9a4f9b9c6d?w=800',
        gradient: 'from-green-400 to-emerald-600',
        bgColor: 'bg-green-800'
      },
      {
        id: 2,
        title: 'Warm Berry Oatmeal',
        calories: 290,
        description: 'Rolled oats cooked with almond milk, mixed berries, and a sprinkle of flax.',
        ingredients: 'Rolled oats, almond milk, berries, flax seeds, maple syrup, cinnamon',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
        gradient: 'from-amber-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 3,
        title: 'Green Smoothie Bowl',
        calories: 350,
        description: 'Kale, banana, avocado, and plant protein — topped with seeds and kiwi.',
        ingredients: 'Kale, banana, avocado, plant protein, almond milk, seeds, kiwi',
        image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800',
        gradient: 'from-lime-400 to-green-500',
        bgColor: 'bg-green-900'
      },
      {
        id: 4,
        title: 'Vanilla Chia Pudding',
        calories: 260,
        description: 'Soaked chia seeds in almond milk, vanilla, topped with sliced banana and walnuts.',
        ingredients: 'Chia seeds, almond milk, vanilla, banana, walnuts, honey',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-indigo-400 to-purple-500',
        bgColor: 'bg-purple-800'
      },
      {
        id: 5,
        title: 'Quinoa Fruit Salad',
        calories: 310,
        description: 'Light quinoa with mixed fruits, mint, and a lime-honey maple dressing.',
        ingredients: 'Quinoa, mixed fruits, mint, lime, honey, maple syrup, almonds',
        image: 'https://images.unsplash.com/photo-1514512364185-7b8d1f4b5d7b?w=800',
        gradient: 'from-rose-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 6,
        title: 'Peanut Butter Banana Toast',
        calories: 330,
        description: 'Whole-grain toast with natural peanut butter, banana slices, and chia seeds.',
        ingredients: 'Whole-grain bread, peanut butter, banana, chia seeds, honey',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
        gradient: 'from-yellow-400 to-orange-600',
        bgColor: 'bg-orange-900'
      }
    ],
    veg: [
      {
        id: 1,
        title: 'Greek Yogurt Parfait',
        calories: 280,
        description: 'Creamy Greek yogurt layered with granola, fresh berries, and honey.',
        ingredients: 'Greek yogurt, granola, berries, honey, almonds',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800',
        gradient: 'from-blue-400 to-cyan-500',
        bgColor: 'bg-cyan-800'
      },
      {
        id: 2,
        title: 'Cheese Omelette',
        calories: 350,
        description: 'Fluffy omelette filled with cheddar cheese, spinach, and tomatoes.',
        ingredients: 'Eggs, cheddar cheese, spinach, tomatoes, milk, butter',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-yellow-400 to-amber-500',
        bgColor: 'bg-amber-800'
      },
      {
        id: 3,
        title: 'Avocado Toast with Eggs',
        calories: 320,
        description: 'Smashed avocado on whole-grain toast topped with poached eggs.',
        ingredients: 'Whole-grain bread, avocado, eggs, lemon, olive oil, salt',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
        gradient: 'from-green-400 to-teal-500',
        bgColor: 'bg-teal-800'
      },
      {
        id: 4,
        title: 'Cottage Cheese Bowl',
        calories: 240,
        description: 'Cottage cheese with cucumber, cherry tomatoes, and fresh herbs.',
        ingredients: 'Cottage cheese, cucumber, tomatoes, herbs, olive oil',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-purple-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 5,
        title: 'Pancakes with Maple Syrup',
        calories: 380,
        description: 'Fluffy buttermilk pancakes served with pure maple syrup and butter.',
        ingredients: 'Flour, buttermilk, eggs, maple syrup, butter, baking powder',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 6,
        title: 'Breakfast Burrito',
        calories: 420,
        description: 'Scrambled eggs, cheese, and veggies wrapped in a whole-wheat tortilla.',
        ingredients: 'Whole-wheat tortilla, eggs, cheese, bell peppers, onions, salsa',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-indigo-400 to-blue-500',
        bgColor: 'bg-blue-800'
      }
    ],
    nonveg: [
      {
        id: 1,
        title: 'Bacon & Egg Sandwich',
        calories: 450,
        description: 'Crispy bacon and fried eggs on toasted bread with cheese.',
        ingredients: 'Bacon, eggs, bread, cheese, lettuce, tomato',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-red-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 2,
        title: 'Smoked Salmon Bagel',
        calories: 380,
        description: 'Smoked salmon on a toasted bagel with cream cheese and capers.',
        ingredients: 'Bagel, smoked salmon, cream cheese, capers, red onion, dill',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-blue-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
      },
      {
        id: 3,
        title: 'Chicken Sausage Scramble',
        calories: 360,
        description: 'Scrambled eggs with chicken sausage, peppers, and onions.',
        ingredients: 'Eggs, chicken sausage, bell peppers, onions, cheese',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-green-400 to-emerald-500',
        bgColor: 'bg-emerald-800'
      },
      {
        id: 4,
        title: 'Turkey Bacon Omelette',
        calories: 340,
        description: 'Omelette filled with turkey bacon, mushrooms, and Swiss cheese.',
        ingredients: 'Eggs, turkey bacon, mushrooms, Swiss cheese, herbs',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-purple-400 to-violet-500',
        bgColor: 'bg-violet-800'
      },
      {
        id: 5,
        title: 'Ham & Cheese Croissant',
        calories: 420,
        description: 'Buttery croissant filled with ham, cheese, and spinach.',
        ingredients: 'Croissant, ham, cheese, spinach, mustard',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 6,
        title: 'Shakshuka with Sausage',
        calories: 390,
        description: 'Eggs poached in tomato sauce with spicy sausage and feta.',
        ingredients: 'Eggs, sausage, tomatoes, onions, spices, feta cheese',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800',
        gradient: 'from-red-400 to-orange-500',
        bgColor: 'bg-orange-800'
      }
    ]
  };

  const currentRecipes = recipes[recipeType];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recipe Type Selector */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full p-1 shadow-lg border">
          <button
            onClick={() => setRecipeType('vegan')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              recipeType === 'vegan'
                ? 'bg-green-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Vegan
          </button>
          <button
            onClick={() => setRecipeType('veg')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              recipeType === 'veg'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Vegetarian
          </button>
          <button
            onClick={() => setRecipeType('nonveg')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              recipeType === 'nonveg'
                ? 'bg-red-500 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Non-Veg
          </button>
        </div>
      </div>

      <h1 className={`text-4xl font-bold text-center mb-4 ${
        recipeType === 'vegan' ? 'text-green-600' :
        recipeType === 'veg' ? 'text-blue-600' : 'text-red-600'
      }`}>
        Healthy {recipeType === 'vegan' ? 'Vegan' : recipeType === 'veg' ? 'Vegetarian' : 'Non-Veg'} Breakfasts
      </h1>
      <p className="text-center text-sm text-gray-600 mb-8">
        Calorie estimates are per serving. {
          recipeType === 'vegan' ? 'Balanced, plant-based options' :
          recipeType === 'veg' ? 'Delicious vegetarian choices' : 'Hearty non-vegetarian meals'
        } to start your day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
        {currentRecipes.map((recipe) => (
          <article key={recipe.id} className="group relative h-80 perspective-[1000px]">
            <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(15deg)_rotateX(5deg)]">
              <div className={`absolute inset-0 bg-linear-to-br ${recipe.gradient} rounded-xl shadow-2xl overflow-hidden backface-hidden`}>
                <img src={recipe.image} alt={recipe.title} className="w-full h-1/2 object-cover" />
                <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-bold text-gray-900">{recipe.title}</h2>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        recipeType === 'vegan' ? 'text-green-600 bg-green-100' :
                        recipeType === 'veg' ? 'text-blue-600 bg-blue-100' : 'text-red-600 bg-red-100'
                      }`}>
                        {recipe.calories} kcal
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">{recipe.description}</p>
                  </div>
                  <button aria-label={`View ${recipe.title} Recipe`} className="btn btn-primary btn-sm">View Recipe</button>
                </div>
              </div>
              <div className={`absolute inset-0 ${recipe.bgColor} rounded-xl transform-[rotateY(180deg)] backface-hidden flex items-center justify-center p-4`}>
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                  <p className="text-sm">{recipe.ingredients}</p>
             
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
