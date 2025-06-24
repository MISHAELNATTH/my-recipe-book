import React, { useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";



const AddRecipe = ({ isEdit }) => {
    const { id } = useParams();
    const { recipes, addRecipe, editRecipe } = useContext(RecipeContext);
    const navigate = useNavigate();

    const recipeToEdit = isEdit ? recipes.find(r => r.id === parseInt(id)) : null;

    const [formData, setFormData] = useState({
        title: recipeToEdit?.title || "",
        ingredients: recipeToEdit?.ingredients?.join(", ") || "",
        instructions: recipeToEdit?.instructions || "",
        category: recipeToEdit?.category || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split(",").map(i => i.trim()),
        };

        if (isEdit) {
        editRecipe(recipeToEdit.id, newRecipe);
        } else {
        addRecipe(newRecipe);
        }

        navigate("/");
    };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
            <label htmlFor="ingredients">Ingredients (comma-separated):</label>
            <input type="text" name="ingredients" id="ingredients" value={formData.ingredients} onChange={handleChange} required />
        </div>

        <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            <textarea name="instructions" id="instructions" value={formData.instructions} onChange={handleChange} required />
        </div>

        <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} required />
        </div>

        <button type="submit">Save Recipe</button>
        </form>
    </div>
  );
};

export default AddRecipe;
