export default function Breakfast() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-600">Healthy Vegan Breakfasts</h1>
      <p className="text-center text-sm text-gray-600 mb-6">Calorie estimates are per serving. Balanced, plant-based options to start your day.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1542444459-db9a4f9b9c6d?w=800"
              alt="Tofu Scramble Bowl"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Tofu Scramble Bowl</h2>
              <div className="badge badge-outline">320 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Protein-rich tofu scramble with spinach, cherry tomatoes, and turmeric.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Tofu Scramble Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800"
              alt="Berry Oatmeal"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Warm Berry Oatmeal</h2>
              <div className="badge badge-outline">290 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Rolled oats cooked with almond milk, mixed berries, and a sprinkle of flax.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Berry Oatmeal Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800"
              alt="Green Smoothie Bowl"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Green Smoothie Bowl</h2>
              <div className="badge badge-outline">350 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Kale, banana, avocado, and plant protein — topped with seeds and kiwi.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Green Smoothie Bowl Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800"
              alt="Chia Pudding"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Vanilla Chia Pudding</h2>
              <div className="badge badge-outline">260 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Soaked chia seeds in almond milk, vanilla, topped with sliced banana and walnuts.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Chia Pudding Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1514512364185-7b8d1f4b5d7b?w=800"
              alt="Quinoa Fruit Salad"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Quinoa Fruit Salad</h2>
              <div className="badge badge-outline">310 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Light quinoa with mixed fruits, mint, and a lime-honey maple dressing.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Quinoa Fruit Salad Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
              alt="Peanut Butter Banana Toast"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-start">
              <h2 className="card-title">Peanut Butter Banana Toast</h2>
              <div className="badge badge-outline">330 kcal</div>
            </div>
            <p className="text-sm text-gray-700">Whole-grain toast with natural peanut butter, banana slices, and chia seeds.</p>
            <div className="card-actions justify-end">
              <button aria-label="View Peanut Butter Banana Toast Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
