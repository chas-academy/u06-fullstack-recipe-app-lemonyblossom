import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [FormsModule, RouterLink, RecipeidformatterPipe],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.css'
})

export class RecipeSearchComponent {
  searchTerm = '';
  recipes?: RecipeResponse[];

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipe(this.searchTerm).subscribe((res) => {
      console.log(res);

      let recipes: RecipeResponse[];

      recipes = res.hits.map((item: { recipe: { label: any; image: any; totalTime: any; }; _links: { self: { href: any; } }; }) => {

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