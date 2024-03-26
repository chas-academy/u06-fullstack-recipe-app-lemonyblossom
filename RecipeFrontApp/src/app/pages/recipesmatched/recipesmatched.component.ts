/* import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';
import { RouterLink } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
/* import { HttpClient, HttpHeaders } from '@angular/common/http';
 */

/* @Component({
  selector: 'app-recipesmatched',
  standalone: true,
  imports: [FormsModule, RouterLink, RecipeidformatterPipe],
  templateUrl: './recipesmatched.component.html',
  styleUrl: './recipesmatched.component.css'
})
export class RecipesMatchedComponent {
  recipes?: RecipeResponse[];

  searchterm = "";

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes(this.searchterm).subscribe((res) => {
      console.log(res);
      let recipes: RecipeResponse[];
      recipes = res.hits.map((item: { recipe: { label: any; image: any; ingredientLines: any; totalTime: any; }; _links: { self: { href: any; }; }; }) => {
        return {
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          selfref: item._links.self.href,

        };
      });
      console.table(recipes);
      this.recipes = recipes;
    });
  }
}
  */