import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.css'
})

export class RecipeSearchComponent {

  recipes? = any;

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes("chicken").subscribe(res => {
      console.log(res);
      this.recipes = res;

      let recipeArray = any[];
      recipeArray = res.hits;
      console.log(recipeArray);

      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
          //lägg in fler om du vill
        }
      })
      console.log(recipes);
      this.recipes.recipes;
    });

  }

}
