import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeResponse } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent {
  searchTerm: string = '';
  recipes?: any;

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes(this.searchTerm).subscribe(res => {
      console.log(res);
      this.recipes = res;
    });
  }

  searchRecipeChicken() {
    this.recipeService.getRecipes(this.searchTerm).subscribe((res) => {
      console.log(res);

      let recipeArray: any[];
      recipeArray = res.hits;
      console.log(recipeArray);

      let recipes = recipeArray.map((item) => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines,
        };
      });
      console.table(recipes);
      this.recipes = recipes;
    });
  }

}