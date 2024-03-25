export interface RecipeResponse {

   uri: string;
   label: string;
   image: string;
   source: string;
   url: string;
   calories: number;
   totalTime: number;
   yield: number;
   cuisineType: string[];
   mealType: string[];
   dietLabels: string[];
   healthLabels: string[];
   ingredientLines: string[];
   ingredients: Ingredient[];
}

export interface Ingredient {
   text: string;
   weight: number;
}

