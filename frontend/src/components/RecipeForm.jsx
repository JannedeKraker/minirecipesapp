import { useState } from "react";

function RecipeForm() {
  const [newRecipeName, setNewRecipeName] = useState("");

  async function addRecipe() {
    if (newRecipeName.trim() !== "") {
      try {
        const response = await fetch("http://localhost:8080/api/v1/recipes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newRecipeName }),
        });

        if (response.ok) {
          setNewRecipeName(""); // Reset het invoerveld
          // Voeg hier de logica toe om de lijst van recepten bij te werken
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        className="py-2 px-4 rounded border focus:outline-none focus:border-blue-500"
        placeholder="Enter recipe name"
        value={newRecipeName}
        onChange={(e) => setNewRecipeName(e.target.value)}
      />
      <button
        className="ml-2 py-2 px-4 bg-blue-500 text-white rounded"
        onClick={addRecipe}
      >
        Add Recipe
      </button>
    </div>
  );
}

export default RecipeForm;
