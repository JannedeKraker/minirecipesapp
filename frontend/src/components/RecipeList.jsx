import { useState, useEffect } from "react";

function RecipeList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/recipes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Recipes:</h1>
      <ul className="space-y-4">
        {data.map((recipe) => (
          <li key={recipe.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
