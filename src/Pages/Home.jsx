// Import images - adjust the paths based on your actual image locations
import homeing from "../assets/homeing.avif";
import reactLogo from "../assets/react.svg";


function Home() {
    return (
      <>
        {/* Hero Banner Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
          <img 
            src={homeing} 
            alt="Delicious food banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-12 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Discover Amazing Recipes</h1>
              <p className="text-xl mb-8">Find, save, and cook delicious recipes from around the world</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300">
                Explore Recipes
              </button>
            </div>
          </div>
        </div>

        {/* Featured Recipes Grid */}
        <h2 className="text-3xl font-bold mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recipe Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
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
                <button className="text-orange-500 hover:text-orange-600 font-semibold">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
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
                <button className="text-orange-500 hover:text-orange-600 font-semibold">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
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
                <button className="text-orange-500 hover:text-orange-600 font-semibold">
                  View Recipe 
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Vegetarian", color: "bg-green-100 text-green-800" },
              { name: "Quick & Easy", color: "bg-blue-100 text-blue-800" },
              { name: "Desserts", color: "bg-pink-100 text-pink-800" },
              { name: "Healthy", color: "bg-emerald-100 text-emerald-800" },
            ].map((category, index) => (
              <div 
                key={index} 
                className={`${category.color} p-6 rounded-2xl text-center hover:scale-105 transition duration-300 cursor-pointer`}
              >
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-2">120+ recipes</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Home;