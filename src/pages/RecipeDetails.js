import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, toggleFavorite, deleteRecipe } = useContext(RecipeContext);

  const recipe = recipes.find(r => r.id === parseInt(id));
  const [showConfirm, setShowConfirm] = useState(false);

  if (!recipe) return <h2>Recipe not found.</h2>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>{recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>

      <div className="details-buttons">
        <button onClick={() => toggleFavorite(recipe.id)}>
          {recipe.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
        <button className="delete-btn" onClick={() => setShowConfirm(true)}>Delete</button>
      </div>

      {showConfirm && (
        <div className="confirm-delete">
          <p>Are you sure you want to delete this recipe?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
      )}

      <br />
      <button onClick={() => navigate("/")}>← Back to Home</button>
    </div>
  );
};

export default RecipeDetails;
