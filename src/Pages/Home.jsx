import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import RecipeCard from "../Pages/RecipeCard";


function Home(){
  const [recipes, setRecipes] = useState([]);
    return(
      <>
      <SearchBar onSearch={setRecipes} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {recipes.map((meal)=> (
       <RecipeCard 
       key={meal.idMeal}
       title={meal.strMeal}
        image={meal.strMealThumb}
        />
        ))}
      </div>
      </>
    );

}
export default Home;