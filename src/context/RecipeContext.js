import { createContext, useState } from "react";
import { recipesData } from "../data";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(recipesData);

  const addRecipe = (newRecipe) => {
      setRecipes(prev => [...prev, { ...newRecipe, id: Date.now() }]);
    };

  const toggleFavorite = (id) => {
    setRecipes(prev =>
      prev.map(r =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      )
    );
  };

    const deleteRecipe = (id) => {
    setRecipes(prev => prev.filter(recipe => recipe.id !== id));
  };

  const editRecipe = (id, updatedData) => {
    setRecipes(prev =>
      prev.map(recipe => (recipe.id === id ? { ...updatedData, id } : recipe))
    );
  };



  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, toggleFavorite, deleteRecipe, editRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

