import React, { useState } from "react";
import mutton from "../../../assets/images/four.png";
import Dhosa from "../../../assets/images/three.png";
import Dumplings from "../../../assets/images/two.png";
import Kathi from "../../../assets/images/one.png";
import RecipeDetails from "./RecipeDetails";

const Recipe = () => {
  const datas = [
    {
      _id: 1,
      name: "Mutton Biriyani",
      time: "1 hr 15 min",
      image: mutton,
      ingredients: "25",
    },
    {
      _id: 2,
      name: "Fancy Dhosa",
      time: "1 hr 15 min",
      image: Dhosa,
      ingredients: "25",
    },
    {
      _id: 3,
      name: "Dumplings",
      time: "1 hr 15 min",
      image: Dumplings,
      ingredients: "25",
    },
    {
      _id: 4,
      name: "Kathi Rolls",
      time: "1 hr 15 min",
      image: Kathi,
      ingredients: "25",
    },
  ];
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRecipes([]);
    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      });
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Error ${response.status}: ${errText}`);
      }
      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex justify-between mx-1 my-4">
        <h2 className="text-4xl">Recent Recipes Found</h2>
        <button className="btn ">View All</button>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
        <label className="block mb-2 font-semibold">Ingredients (comma separated):</label>
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g. rice, egg"
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <div className="alert alert-error mb-4">{error}</div>}
      {recipes.length > 0 && (
        <div className="space-y-4 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold">Results:</h3>
          {recipes.map((r, idx) => (
            <div key={idx} className="card bg-base-100 shadow p-4">
              <div className="font-bold">{r.recipe}</div>
              <div className="text-sm mb-2">Ingredients: {r.ingredients}</div>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="link link-primary">
                View Recipe
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="mx-2 grid lg:grid-cols-4 md:grid-cols-2">
        {datas.map((data) => (
          <RecipeDetails key={data._id} data={data}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
