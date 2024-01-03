import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamTypes {
  recipeId: string;
}

const RecipeDetail: React.FC = () => {
  const { recipeId } = useParams<ParamTypes>();
  // Dummy data, replace with actual data fetched from the server
  const recipe = { id: 1, title: 'Pasta Carbonara', ingredients: ['Pasta', 'Eggs', 'Bacon'] };

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