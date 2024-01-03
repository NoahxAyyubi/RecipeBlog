// RecipeForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm: React.FC = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to add a new recipe
      const response = await axios.post('http://your-json-server-url/recipes', recipe);

      // Handle the response, e.g., show a success message
      console.log('Recipe added successfully:', response.data);

      // Clear the form or navigate to the updated recipe details page
      setRecipe({
        title: '',
        ingredients: [],
      });
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error adding recipe:', error);
    }
  };

  // Rest of the component code

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for title and ingredients */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
