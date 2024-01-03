import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const RecipeForm: React.FC = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit your recipe data to state or backend here
    console.log("Recipe to add:", recipe);
    // Reset form after submission
    setRecipe({ title: "", ingredients: "", instructions: "" });
  };

  return (
    <Container>
      <h2>Add a Recipe</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formRecipeTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
          />
        </Form.Group>

        <Form.Group controlId="formRecipeIngredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            type="text"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="List ingredients"
          />
        </Form.Group>

        <Form.Group controlId="formRecipeInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Recipe instructions"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Recipe
        </Button>
      </Form>
    </Container>
  );
};

export default RecipeForm;
