export default function Dinner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Dinner Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Dinner Recipe Cards */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400"
              alt="Grilled Steak"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Grilled Steak</h2>
            <p>Juicy grilled steak seasoned with herbs, served with roasted vegetables.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400"
              alt="Pasta Carbonara"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pasta Carbonara</h2>
            <p>Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400"
              alt="Chicken Stir Fry"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chicken Stir Fry</h2>
            <p>Quick and flavorful stir-fried chicken with vegetables and soy sauce.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551782450-17144efb5723?w=400"
              alt="Salmon Dinner"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Baked Salmon</h2>
            <p>Healthy baked salmon with lemon and herbs, perfect for a light dinner.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400"
              alt="Beef Tacos"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Beef Tacos</h2>
            <p>Spicy beef tacos with fresh salsa, cheese, and avocado in soft tortillas.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
              alt="Vegetable Curry"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vegetable Curry</h2>
             <h1 className="card-title">Vegetable Curry</h1>
            <p>Aromatic vegetable curry with coconut milk and spices, served with rice.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View  Recipe</button>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
