import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RecipeidformatterPipe, CommonModule, RouterLink],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

export class RecipeComponent implements OnInit {
  id?: string;
  recipe?: RecipeResponse;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      console.log(this.id);
      if (this.id) {
        this.getRecipeById();
      }
    });
  }

  getRecipeById() {
    this.recipeService.getRecipeById(this.id).subscribe((res) => {
      console.table(res);

      let recipe: RecipeResponse = {
        label: res.recipe.label,
        image: res.recipe.image,
        ingredientLines: res.recipe.ngredientLines,
        totalTime: res.recipe.totalTime,
        yield: res.recipe.yield,
        dietLabels: res.recipe.dietLabels,
        cautions: res.recipe.cautions,
        cuisineType: res.recipe.cuisineType,
        mealType: res.recipe.mealType,
        dishType: res.recipe.dishType,
        instructions: res.recipe.instructions,
        tags: res.recipe.tags,
        self: res?.self,
      };
      console.table(recipe);
      this.recipe = recipe;
    });
  }
}
