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
  searchTerm: string = '';
  recipes: RecipeResponse[] = [];
  activesearch = false;
  constructor(private recipeService: RecipeService) { }

  searchRecipes() {
    this.recipeService.searchRecipes(this.searchTerm).subscribe((res) => {
      console.table(res);
      this.activesearch = true;
      let recipes: RecipeResponse[];
      recipes = res.hits.map(
        (item: {
          recipe: {
            label: any;
            image: any;
            ingredientLines: any;
            totalTime: any;
            yield: any;
          };
          _links: { self: { href: any } };
        }) => {
          return {
            label: item.recipe.label,
            image: item.recipe.image,
            ingredientLines: item.recipe.ingredientLines,
            totalTime: item.recipe.totalTime,
            yield: item.recipe.yield,
            self: item._links.self.href,
          };
        }
      );
      console.log(recipes);
      this.recipes = recipes;
    });
  }
}