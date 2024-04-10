import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeSearchComponent } from '../search/recipe-search.component';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeResponse } from '../../interfaces/recipe';
import { RecipeidformatterPipe } from '../../pipes/recipeidformatter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RecipeidformatterPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  searchTerm: string;
  activesearch: boolean;
  dishType: RecipeResponse[];

  constructor(private recipeService: RecipeService) {
    this.searchTerm = '';
    this.activesearch = false;
    this.dishType = [];
  }

  ngOnInit(): void {
    this.fetchRecipes();
    console.log('HomeComponent initialized');
  }

  fetchRecipes() {
    this.getAppetizer();
    this.getMainCourse();
    this.getDessert();
  }

  getAppetizer() {
    this.recipeService.fetchRecipes("appetizer").subscribe(res => {
      this.dishType.push(res[0]); console.table(res);
    });

  }
  getMainCourse() {
    this.recipeService.fetchRecipes("main course").subscribe(res => {
      this.dishType = this.dishType;
      console.table(res);
    });
  }
  getDessert() {
    this.recipeService.fetchRecipes("dessert").subscribe(res => {
      this.dishType = this.dishType;
      console.table(res);
    });
  }
}
