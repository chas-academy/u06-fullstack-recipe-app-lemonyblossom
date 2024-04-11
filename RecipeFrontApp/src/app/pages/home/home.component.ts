import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeidformatterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  appetizer: RecipeResponse[] = [];
  mainCourse: RecipeResponse[] = [];
  desserts: RecipeResponse[] = [];
  activesearch = false;


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.fetchRecipeSuggestions();
  }

  fetchRecipeSuggestions(): void {
    this.recipeService.fetchRecipeSuggestions().subscribe((recipes) => {
      console.log('Fetched recipes:', recipes);
      if (Array.isArray(recipes) && recipes.length > 0) {
        console.log('Array hits:', recipes);

        this.appetizer = recipes.filter(recipe => recipe.dishType?.length === 1 && recipe.dishType.includes('starter'));
        this.mainCourse = recipes.filter(recipe => recipe.dishType?.length === 1 && recipe.dishType.includes('main course'));
        this.desserts = recipes.filter(recipe => recipe.dishType?.length === 1 && recipe.dishType.includes('desserts'));

        console.log('Appetizers:', this.appetizer);
        console.log('Main Course:', this.mainCourse);
        console.log('Desserts:', this.desserts);
      } else {
        console.log('No hits found');
      }
    });
  }
}
