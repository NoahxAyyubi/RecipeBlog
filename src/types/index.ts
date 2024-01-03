export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: string;
}
