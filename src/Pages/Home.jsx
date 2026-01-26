// Import images - adjust the paths based on your actual image locations
import homeing from "../assets/homeing.avif";
import reactLogo from "../assets/react.svg";
import React from "react";


function Home() {
    return (
      <React.Fragment>
        {/* Hero Banner Section */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src={homeing} 
            alt="Delicious food banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent flex items-center">
            <div className="text-white p-12 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>Discover Amazing Recipes</h1>
              <p className="text-xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>Find, save, and cook delicious recipes from around the world</p>
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                  Explore Recipes
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                  Featured Recipes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Recipes Grid */}
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recipe Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Pasta Carbonara" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Creamy Pasta Carbonara</h3>
              <p className="text-gray-600 mb-4">A classic Italian pasta dish with eggs, cheese, and pancetta</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">30 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Avocado Toast" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Avocado Toast Deluxe</h3>
              <p className="text-gray-600 mb-4">Healthy breakfast with avocado, cherry tomatoes, and spices</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">15 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Chocolate Cake" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Decadent Chocolate Cake</h3>
              <p className="text-gray-600 mb-4">Rich, moist chocolate cake with ganache frosting</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">90 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 4 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Grilled Salmon" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Herb-Crusted Grilled Salmon</h3>
              <p className="text-gray-600 mb-4">Fresh salmon fillet with lemon herb crust and asparagus</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">25 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 5 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Chicken Stir Fry" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Spicy Chicken Stir Fry</h3>
              <p className="text-gray-600 mb-4">Tender chicken with colorful vegetables in savory sauce</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">20 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 6 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Berry Smoothie" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mixed Berry Smoothie Bowl</h3>
              <p className="text-gray-600 mb-4">Antioxidant-rich berries blended with yogurt and topped with granola</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">10 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Vegan Recipes Section */}
        <h2 className="text-3xl font-bold mb-8">Vegan Diet Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Vegan Buddha Bowl" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Vegan Buddha Bowl</h3>
              <p className="text-gray-600 mb-4">Nutritious bowl with quinoa, roasted veggies, and tahini dressing</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">25 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Vegan Chocolate Avocado Mousse" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Chocolate Avocado Mousse</h3>
              <p className="text-gray-600 mb-4">Creamy, rich dessert made with avocado and cocoa</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">15 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={reactLogo} 
                alt="Vegan Lentil Soup" 
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Hearty Lentil Soup</h3>
              <p className="text-gray-600 mb-4">Comforting soup with lentils, carrots, and spices</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-500 font-semibold">40 min</span>
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "🥬 Vegetarian", color: "bg-green-100 text-green-800" },
              { name: "🥕 Vegan", color: "bg-lime-100 text-lime-800" },
              { name: "⚡ Quick & Easy", color: "bg-blue-100 text-blue-800" },
              { name: "🍰 Desserts", color: "bg-pink-100 text-pink-800" },
              { name: "💚 Healthy", color: "bg-emerald-100 text-emerald-800" },
            ].map((category, index) => (
              <div 
                key={index} 
                className={`${category.color} p-6 rounded-2xl text-center hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer`}
              >
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-2">120+ recipes</p>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
}

export default Home;