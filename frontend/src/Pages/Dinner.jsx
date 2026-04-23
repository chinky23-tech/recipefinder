import React, { useState } from 'react';

export default function Dinner() {
  const [recipeType, setRecipeType] = useState('vegan');

  const recipes = {
    vegan: [
      {
        id: 1,
        title: 'Lentil Curry',
        calories: 380,
        description: 'Aromatic lentil curry with coconut milk, spinach, and spices, served with rice.',
        ingredients: 'Red lentils, coconut milk, spinach, tomatoes, garlic, ginger, spices, rice',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 2,
        title: 'Stuffed Bell Peppers',
        calories: 320,
        description: 'Bell peppers stuffed with quinoa, black beans, corn, and tomato sauce.',
        ingredients: 'Bell peppers, quinoa, black beans, corn, tomatoes, onions, spices',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
        gradient: 'from-green-400 to-emerald-500',
        bgColor: 'bg-emerald-800'
      },
      {
        id: 3,
        title: 'Mushroom Risotto',
        calories: 360,
        description: 'Creamy risotto with wild mushrooms, vegetable broth, and fresh herbs.',
        ingredients: 'Arborio rice, wild mushrooms, vegetable broth, onions, garlic, herbs',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800',
        gradient: 'from-amber-400 to-yellow-500',
        bgColor: 'bg-yellow-800'
      },
      {
        id: 4,
        title: 'Eggplant Parmesan',
        calories: 340,
        description: 'Breaded eggplant slices with marinara sauce and vegan cheese, baked to perfection.',
        ingredients: 'Eggplant, breadcrumbs, marinara sauce, vegan cheese, basil, olive oil',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=800',
        gradient: 'from-purple-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
      },
      {
        id: 5,
        title: 'Chickpea Stir Fry',
        calories: 310,
        description: 'Spicy stir-fried chickpeas with broccoli, carrots, and ginger soy sauce.',
        ingredients: 'Chickpeas, broccoli, carrots, ginger, soy sauce, garlic, sesame seeds',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800',
        gradient: 'from-lime-400 to-green-500',
        bgColor: 'bg-green-800'
      },
      {
        id: 6,
        title: 'Sweet Potato Buddha Bowl',
        calories: 390,
        description: 'Roasted sweet potatoes, kale, avocado, and tahini dressing in a nourishing bowl.',
        ingredients: 'Sweet potatoes, kale, avocado, chickpeas, tahini, lemon, spices',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
        gradient: 'from-pink-400 to-rose-500',
        bgColor: 'bg-rose-800'
      }
    ],
    veg: [
      {
        id: 1,
        title: 'Paneer Butter Masala',
        calories: 420,
        description: 'Creamy paneer cubes in rich tomato-based curry with butter and cream.',
        ingredients: 'Paneer, tomatoes, cream, butter, onions, spices, cashews',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 2,
        title: 'Cheese Quesadillas',
        calories: 380,
        description: 'Melted cheese between flour tortillas with peppers, onions, and salsa.',
        ingredients: 'Flour tortillas, cheese, bell peppers, onions, salsa, sour cream',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
        gradient: 'from-yellow-400 to-orange-500',
        bgColor: 'bg-orange-800'
      },
      {
        id: 3,
        title: 'Creamy Pasta Primavera',
        calories: 360,
        description: 'Pasta with seasonal vegetables in a light cream sauce with Parmesan.',
        ingredients: 'Pasta, zucchini, cherry tomatoes, cream, Parmesan, garlic, herbs',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800',
        gradient: 'from-green-400 to-teal-500',
        bgColor: 'bg-teal-800'
      },
      {
        id: 4,
        title: 'Caprese Stuffed Chicken',
        calories: 340,
        description: 'Chicken breasts stuffed with mozzarella, tomatoes, and basil.',
        ingredients: 'Chicken breasts, mozzarella, tomatoes, basil, balsamic, olive oil',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=800',
        gradient: 'from-red-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 5,
        title: 'Vegetable Lasagna',
        calories: 410,
        description: 'Layers of pasta, ricotta, vegetables, and marinara sauce baked to perfection.',
        ingredients: 'Lasagna noodles, ricotta, zucchini, spinach, marinara, mozzarella',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800',
        gradient: 'from-blue-400 to-indigo-500',
        bgColor: 'bg-indigo-800'
      },
      {
        id: 6,
        title: 'Greek Salad with Feta',
        calories: 290,
        description: 'Fresh cucumbers, tomatoes, olives, and feta cheese with olive oil dressing.',
        ingredients: 'Cucumbers, tomatoes, feta, olives, red onion, olive oil, oregano',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
        gradient: 'from-cyan-400 to-blue-500',
        bgColor: 'bg-blue-800'
      }
    ],
    nonveg: [
      {
        id: 1,
        title: 'Grilled Steak',
        calories: 450,
        description: 'Juicy grilled steak seasoned with herbs, served with roasted vegetables.',
        ingredients: 'Beef steak, herbs, garlic, potatoes, carrots, olive oil',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
        gradient: 'from-red-400 to-pink-500',
        bgColor: 'bg-pink-800'
      },
      {
        id: 2,
        title: 'Pasta Carbonara',
        calories: 480,
        description: 'Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.',
        ingredients: 'Spaghetti, pancetta, eggs, Parmesan, black pepper, cream',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800',
        gradient: 'from-yellow-400 to-amber-500',
        bgColor: 'bg-amber-800'
      },
      {
        id: 3,
        title: 'Chicken Stir Fry',
        calories: 360,
        description: 'Quick and flavorful stir-fried chicken with vegetables and soy sauce.',
        ingredients: 'Chicken breast, broccoli, carrots, soy sauce, ginger, garlic, sesame',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
        gradient: 'from-orange-400 to-red-500',
        bgColor: 'bg-red-800'
      },
      {
        id: 4,
        title: 'Baked Salmon',
        calories: 380,
        description: 'Healthy baked salmon with lemon and herbs, perfect for a light dinner.',
        ingredients: 'Salmon fillet, lemon, herbs, olive oil, garlic, asparagus',
        image: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=800',
        gradient: 'from-blue-400 to-cyan-500',
        bgColor: 'bg-cyan-800'
      },
      {
        id: 5,
        title: 'Beef Tacos',
        calories: 420,
        description: 'Spicy beef tacos with fresh salsa, cheese, and avocado in soft tortillas.',
        ingredients: 'Ground beef, tortillas, cheese, avocado, salsa, lettuce, lime',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800',
        gradient: 'from-green-400 to-emerald-500',
        bgColor: 'bg-emerald-800'
      },
      {
        id: 6,
        title: 'Shrimp Scampi',
        calories: 340,
        description: 'Garlic butter shrimp over linguine with white wine and parsley.',
        ingredients: 'Shrimp, linguine, garlic, butter, white wine, parsley, lemon',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
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
        {recipeType === 'vegan' ? 'Vegan' : recipeType === 'veg' ? 'Vegetarian' : 'Non-Veg'} Dinner Recipes
      </h1>
      <p className="text-center text-sm text-gray-600 mb-8">
        Calorie estimates are per serving. {
          recipeType === 'vegan' ? 'Plant-based dinner options' :
          recipeType === 'veg' ? 'Delicious vegetarian dinners' : 'Hearty non-vegetarian meals'
        } to end your day.
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
