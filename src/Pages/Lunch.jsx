import React, { useState } from 'react';

export default function Lunch() {
  const [recipeType, setRecipeType] = useState('vegan');

  const recipes = {
    vegan: [
      {
        id: 1,
        title: 'Quinoa Buddha Bowl',
        calories: 420,
        description: 'Nutritious bowl with quinoa, roasted vegetables, avocado, and tahini dressing.',
        ingredients: 'Quinoa, sweet potatoes, broccoli, avocado, chickpeas, tahini, lemon',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
        gradient: 'from-green-400 to-emerald-500',
        bgColor: 'bg-emerald-800'
      },
      {
        id: 2,
        title: 'Falafel Wrap',
        calories: 380,
        description: 'Crispy falafel balls wrapped in pita with hummus, veggies, and tahini.',
        ingredients: 'Chickpeas, pita bread, hummus, lettuce, tomatoes, cucumber, tahini',
        image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?w=800',
        gradient: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 3,
        title: 'Lentil Soup',
        calories: 320,
        description: 'Hearty lentil soup with carrots, celery, tomatoes, and fresh herbs.',
        ingredients: 'Red lentils, carrots, celery, tomatoes, onions, garlic, herbs, vegetable broth',
        image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 4,
        title: 'Veggie Sushi Rolls',
        calories: 290,
        description: 'Fresh sushi rolls with cucumber, avocado, carrots, and pickled ginger.',
        ingredients: 'Nori sheets, sushi rice, cucumber, avocado, carrots, pickled ginger, soy sauce',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
        gradient: 'from-cyan-400 to-blue-500',
        bgColor: 'bg-blue-800'
      },
      {
        id: 5,
        title: 'Black Bean Burrito Bowl',
        calories: 410,
        description: 'Spicy black beans with rice, corn, salsa, and guacamole in a bowl.',
        ingredients: 'Black beans, rice, corn, salsa, guacamole, lime, cilantro, spices',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
        gradient: 'from-purple-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
      },
      {
        id: 6,
        title: 'Mediterranean Chickpea Salad',
        calories: 350,
        description: 'Chickpeas with cucumber, tomatoes, olives, feta alternative, and olive oil dressing.',
        ingredients: 'Chickpeas, cucumber, tomatoes, olives, vegan feta, olive oil, herbs',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
        gradient: 'from-lime-400 to-green-500',
        bgColor: 'bg-green-800'
      }
    ],
    veg: [
      {
        id: 1,
        title: 'Caprese Sandwich',
        calories: 380,
        description: 'Fresh mozzarella, tomatoes, and basil on ciabatta with balsamic glaze.',
        ingredients: 'Ciabatta bread, mozzarella, tomatoes, basil, balsamic glaze, olive oil',
        image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=800',
        gradient: 'from-red-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 2,
        title: 'Cheese Quesadilla',
        calories: 420,
        description: 'Melted cheese between flour tortillas with peppers, onions, and sour cream.',
        ingredients: 'Flour tortillas, cheddar cheese, bell peppers, onions, sour cream, salsa',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800',
        gradient: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 3,
        title: 'Pasta Pesto Salad',
        calories: 360,
        description: 'Pasta tossed with pesto, cherry tomatoes, mozzarella balls, and pine nuts.',
        ingredients: 'Pasta, pesto, cherry tomatoes, mozzarella, pine nuts, basil, olive oil',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800',
        gradient: 'from-green-400 to-teal-500',
        bgColor: 'bg-teal-800'
      },
      {
        id: 4,
        title: 'Greek Salad with Feta',
        calories: 320,
        description: 'Cucumbers, tomatoes, olives, and feta cheese with olive oil dressing.',
        ingredients: 'Cucumbers, tomatoes, feta cheese, olives, red onion, olive oil, oregano',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
        gradient: 'from-blue-400 to-cyan-500',
        bgColor: 'bg-cyan-800'
      },
      {
        id: 5,
        title: 'Egg Salad Sandwich',
        calories: 340,
        description: 'Creamy egg salad with mayo, celery, and herbs on whole grain bread.',
        ingredients: 'Hard-boiled eggs, mayonnaise, celery, mustard, bread, lettuce, herbs',
        image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=800',
        gradient: 'from-amber-400 to-yellow-500',
        bgColor: 'bg-yellow-800'
      },
      {
        id: 6,
        title: 'Spinach & Ricotta Stuffed Shells',
        calories: 390,
        description: 'Jumbo pasta shells filled with spinach and ricotta in marinara sauce.',
        ingredients: 'Jumbo shells, ricotta cheese, spinach, marinara sauce, mozzarella, garlic',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800',
        gradient: 'from-purple-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
      }
    ],
    nonveg: [
      {
        id: 1,
        title: 'Grilled Chicken Salad',
        calories: 380,
        description: 'Grilled chicken breast over mixed greens with vinaigrette and avocado.',
        ingredients: 'Chicken breast, mixed greens, avocado, tomatoes, cucumber, vinaigrette',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
        gradient: 'from-green-400 to-emerald-500',
        bgColor: 'bg-emerald-800'
      },
      {
        id: 2,
        title: 'Turkey Club Sandwich',
        calories: 420,
        description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.',
        ingredients: 'Turkey breast, bacon, bread, lettuce, tomato, mayonnaise, cheese',
        image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=800',
        gradient: 'from-red-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 3,
        title: 'Tuna Salad Wrap',
        calories: 360,
        description: 'Tuna salad with mayo, celery, and onions wrapped in a whole wheat tortilla.',
        ingredients: 'Canned tuna, mayonnaise, celery, onions, whole wheat tortilla, lettuce',
        image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?w=800',
        gradient: 'from-blue-400 to-cyan-500',
        bgColor: 'bg-cyan-800'
      },
      {
        id: 4,
        title: 'Chicken Caesar Wrap',
        calories: 410,
        description: 'Grilled chicken with romaine, Parmesan, and Caesar dressing in a wrap.',
        ingredients: 'Chicken breast, romaine lettuce, Parmesan, Caesar dressing, croutons, tortilla',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800',
        gradient: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 5,
        title: 'Beef Stir Fry',
        calories: 440,
        description: 'Tender beef strips stir-fried with broccoli, carrots, and ginger soy sauce.',
        ingredients: 'Beef strips, broccoli, carrots, soy sauce, ginger, garlic, sesame seeds',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 6,
        title: 'Shrimp Po\' Boy',
        calories: 390,
        description: 'Crispy fried shrimp on French bread with lettuce, tomato, and remoulade.',
        ingredients: 'Shrimp, French bread, lettuce, tomato, remoulade sauce, flour, oil',
        image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=800',
        gradient: 'from-purple-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
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
        {recipeType === 'vegan' ? 'Vegan' : recipeType === 'veg' ? 'Vegetarian' : 'Non-Veg'} Lunch Recipes
      </h1>
      <p className="text-center text-sm text-gray-600 mb-8">
        Calorie estimates are per serving. {
          recipeType === 'vegan' ? 'Plant-based lunch options' :
          recipeType === 'veg' ? 'Delicious vegetarian lunches' : 'Hearty non-vegetarian meals'
        } to power your afternoon.
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
