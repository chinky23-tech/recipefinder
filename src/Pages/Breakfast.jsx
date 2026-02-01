export default function Breakfast() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-600">Healthy Vegan Breakfasts</h1>
      <p className="text-center text-sm text-gray-600 mb-6">Calorie estimates are per serving. Balanced, plant-based options to start your day.</p>
      <div className="space-y-4">
        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1542444459-db9a4f9b9c6d?w=800" alt="Tofu Scramble Bowl" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Tofu Scramble Bowl</h2>
                <span className="text-sm text-gray-600">320 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Protein-rich tofu scramble with spinach, cherry tomatoes, and turmeric.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Tofu Scramble Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800" alt="Berry Oatmeal" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Warm Berry Oatmeal</h2>
                <span className="text-sm text-gray-600">290 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Rolled oats cooked with almond milk, mixed berries, and a sprinkle of flax.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Berry Oatmeal Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800" alt="Green Smoothie Bowl" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Green Smoothie Bowl</h2>
                <span className="text-sm text-gray-600">350 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Kale, banana, avocado, and plant protein — topped with seeds and kiwi.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Green Smoothie Bowl Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800" alt="Chia Pudding" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Vanilla Chia Pudding</h2>
                <span className="text-sm text-gray-600">260 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Soaked chia seeds in almond milk, vanilla, topped with sliced banana and walnuts.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Chia Pudding Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1514512364185-7b8d1f4b5d7b?w=800" alt="Quinoa Fruit Salad" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Quinoa Fruit Salad</h2>
                <span className="text-sm text-gray-600">310 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Light quinoa with mixed fruits, mint, and a lime-honey maple dressing.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Quinoa Fruit Salad Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>

        <article className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm border p-4">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" alt="Peanut Butter Banana Toast" className="w-full md:w-1/3 h-40 object-cover rounded-md md:rounded-none md:mr-4" />
          <div className="flex-1 flex flex-col justify-between mt-3 md:mt-0">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">Peanut Butter Banana Toast</h2>
                <span className="text-sm text-gray-600">330 kcal</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">Whole-grain toast with natural peanut butter, banana slices, and chia seeds.</p>
            </div>
            <div className="mt-4 self-end">
              <button aria-label="View Peanut Butter Banana Toast Recipe" className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
