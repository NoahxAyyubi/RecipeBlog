import { combineReducers } from "redux";
import recipeReducer from "../features/recipes/recipeSlice";

const rootReducer = combineReducers({
  recipes: recipeReducer,
  // Add other reducers here
});

export default rootReducer;
