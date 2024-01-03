import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList: React.FC = () => {
  // Dummy data, replace with actual data fetched from the server
  const recipes = [
    { id: 1, title: 'Pasta Carbonara' },
    { id: 2, title: 'Chicken Stir Fry' },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
//Displays a list of recipes with their titles.
//Utilizes React Router (Link) to navigate to the details page for each recipe.