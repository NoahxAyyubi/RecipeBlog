import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
}

const RecipeDetail: React.FC = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Fetch recipe details from the server
    axios.get(`/recipes/${recipeId}`).then((response) => {
      setRecipe(response.data);
    });
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Recipe Detail</h2>
      <h3>{recipe.title}</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* Add more details and functionalities as needed */}
    </div>
  );
};

export default RecipeDetail;


//Retrieves and displays details for a specific recipe, including its title and ingredients.
//Utilizes React Router (useParams) to dynamically fetch the recipe based on the route parameter.