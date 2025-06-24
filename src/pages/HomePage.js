import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { recipes } = useContext(RecipeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(recipes.map(r => r.category))];

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="page-container">
    <h1>My Recipe Book</h1>

    <div className="home-controls">
        <label>
        Filter by Category:{" "}
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
                {cat}
            </option>
            ))}
        </select>
        </label>

        <div className="home-buttons">
        <Link to="/add">
            <button>Add New Recipe</button>
        </Link>

        <Link to="/favorites">
            <button>Go to Favorites</button>
        </Link>
        </div>
    </div>

  <div className="recipe-list">
    {filteredRecipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
</div>

    );
    };



    export default HomePage;
