import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Fetch data from the JSON server when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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