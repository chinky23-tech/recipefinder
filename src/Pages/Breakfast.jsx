export default function Breakfast() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">Breakfast Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Breakfast Recipe Cards */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400"
              alt="Pancakes"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fluffy Pancakes</h2>
            <p>Start your day with these delicious homemade pancakes topped with maple syrup.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1559054660-8c88e74bbb75?w=400"
              alt="Avocado Toast"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Avocado Toast</h2>
            <p>Healthy and delicious avocado toast with poached eggs and cherry tomatoes.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400"
              alt="Smoothie Bowl"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Berry Smoothie Bowl</h2>
            <p>A refreshing smoothie bowl packed with antioxidants and topped with fresh fruits.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
