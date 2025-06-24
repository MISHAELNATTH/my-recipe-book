import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const { recipes } = useContext(RecipeContext);
  const favoriteRecipes = recipes.filter(r => r.isFavorite);

  return (
    <div className="page-container">
    <h2>My Favorite Recipes</h2>
    {favoriteRecipes.length === 0 ? (
        <p className="no-favorites-msg">You haven't added any favorite recipes yet.</p>
    ):
    
    (
    <div className="recipe-list">
    {favoriteRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
    </div>
    )}
    </div>
  );
};

export default FavoritesPage;
