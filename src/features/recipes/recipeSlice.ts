import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/recipeTypes";

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
    },
    // Add other reducers for CRUD operations
  },
});

export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
