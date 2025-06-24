import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>
      <Link to={`/recipe/${recipe.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
