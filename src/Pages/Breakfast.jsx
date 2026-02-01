export default function Breakfast() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-600">Healthy Vegan Breakfasts</h1>
      <p className="text-center text-sm text-gray-600 mb-8">Calorie estimates are per serving. Balanced, plant-based options to start your day.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
        <article className="group relative h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
              <img src="https://images.unsplash.com/photo-1542444459-db9a4f9b9c6d?w=800" alt="Tofu Scramble Bowl" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Tofu Scramble Bowl</h2>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">320 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Protein-rich tofu scramble with spinach, cherry tomatoes, and turmeric.</p>
                </div>
                <button aria-label="View Tofu Scramble Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-green-800 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Tofu, spinach, tomatoes, turmeric, coconut milk, garlic, onion</p>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800" alt="Berry Oatmeal" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Warm Berry Oatmeal</h2>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded">290 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Rolled oats cooked with almond milk, mixed berries, and a sprinkle of flax.</p>
                </div>
                <button aria-label="View Berry Oatmeal Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-orange-800 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Rolled oats, almond milk, berries, flax seeds, maple syrup, cinnamon</p>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
              <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800" alt="Green Smoothie Bowl" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Green Smoothie Bowl</h2>
                    <span className="text-xs font-semibold text-lime-600 bg-lime-100 px-2 py-1 rounded">350 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Kale, banana, avocado, and plant protein — topped with seeds and kiwi.</p>
                </div>
                <button aria-label="View Green Smoothie Bowl Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-green-900 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Kale, banana, avocado, plant protein, almond milk, seeds, kiwi</p>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative h-80 [perspective:1000px]">
          <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
              <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800" alt="Chia Pudding" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Vanilla Chia Pudding</h2>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">260 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Soaked chia seeds in almond milk, vanilla, topped with sliced banana and walnuts.</p>
                </div>
                <button aria-label="View Chia Pudding Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-purple-800 rounded-xl transform-[rotateY(180deg)] backface-hidden flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Chia seeds, almond milk, vanilla, banana, walnuts, honey</p>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative h-80 perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-linear-to-br from-rose-400 to-pink-500 rounded-xl shadow-2xl overflow-hidden backface-hidden">
              <img src="https://images.unsplash.com/photo-1514512364185-7b8d1f4b5d7b?w=800" alt="Quinoa Fruit Salad" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Quinoa Fruit Salad</h2>
                    <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-2 py-1 rounded">310 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Light quinoa with mixed fruits, mint, and a lime-honey maple dressing.</p>
                </div>
                <button aria-label="View Quinoa Fruit Salad Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-pink-800 rounded-xl transform-[rotateY(180deg)] backface-hidden flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Quinoa, mixed fruits, mint, lime, honey, maple syrup, almonds</p>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative h-80 perspective-[1000px]">
          <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(15deg)_rotateX(5deg)]">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-orange-600 rounded-xl shadow-2xl overflow-hidden backface-hidden">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" alt="Peanut Butter Banana Toast" className="w-full h-1/2 object-cover" />
              <div className="h-1/2 bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold text-gray-900">Peanut Butter Banana Toast</h2>
                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">330 kcal</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">Whole-grain toast with natural peanut butter, banana slices, and chia seeds.</p>
                </div>
                <button aria-label="View Peanut Butter Banana Toast Recipe" className="btn btn-primary btn-sm">View Recipe</button>
              </div>
            </div>
            <div className="absolute inset-0 bg-orange-900 rounded-xl transform-[rotateY(180deg)] backface-hidden flex items-center justify-center p-4">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ingredients</h3>
                <p className="text-sm">Whole-grain bread, peanut butter, banana, chia seeds, honey</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
