import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeResponse } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent {
  searchTerm: string = '';
  recipes: RecipeResponse[] = [];

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes(this.searchTerm).subscribe(res => {
      console.log(res);
      this.recipes = res;
    });
  }
}