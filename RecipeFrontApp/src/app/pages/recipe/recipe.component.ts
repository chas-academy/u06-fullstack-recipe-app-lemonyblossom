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
  recipes: RecipeResponse[] = [];


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
    if (this.id) {
      this.recipeService.getRecipeById(this.id).subscribe((res) => {
        console.table(res);

        let recipe: RecipeResponse = {
          label: res.label,
          image: res.image,
          ingredientLines: res.ingredientLines,
          totalTime: res.totalTime,
          yield: res.yield,
          dietLabels: res.dietLabels,
          cautions: res.cautions,
          cuisineType: res.cuisineType,
          mealType: res.mealType,
          dishType: res.dishType,
          instructions: res.instructions,
          tags: res.tags,
          self: res?.self,
        };
        console.table(recipe);
        this.recipes = [recipe];
      });
    } else {
      console.error('Recipe ID is not defined.');
    }
  }
}  
