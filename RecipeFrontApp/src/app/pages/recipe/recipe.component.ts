import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  id?: string;
  recipe?: RecipeResponse;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = String(params.get('id'));
      console.log(this.id);
      if (this.id) {
        this.getRecipeById();
      }
    });
  }

  getRecipeById() {
    this.recipeService.getRecipe(this.id).subscribe((res) => {
      console.table(res);

      let recipe: RecipeResponse = {
        label: res.recipe.label,
        image: res.recipe.image,
        ingredientLines: res.recipe.ingredientLines,
        totalTime: res.recipe.totalTime,
        self: res._links.self.href,
        yield: res.recipe.yield,
        dietLabels: res.recipe.dietLabels,
        cautions: res.recipe.cautions,
        cuisineType: res.recipe.cuisineType,
        mealType: res.recipe.mealType,
        dishType: res.recipe.dishType,
        instructions: res.recipe.instructions,
        tags: res.recipe.tags,
      };
      console.table(recipe);
      this.recipe = recipe;
    });
  }
}


/*     this.getAllRecipes();
 */

/* getAllRecipes(): void {
  this.recipeService.getAllRecipes().subscribe(
    (recipes: RecipeResponse[]) => {
      this.recipes = recipes;
    },
    (error) => {
      console.error('Error fetching recipes:', error);
    }
  ); */