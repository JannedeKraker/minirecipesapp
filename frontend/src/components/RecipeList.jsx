import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("/recipes") // Hier moet je het juiste backend-eindpunt opgeven
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">All Recipes</h1>
      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
