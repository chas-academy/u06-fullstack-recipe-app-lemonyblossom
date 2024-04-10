import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RecipeResponse } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = 'a83c1ac4413b17fea8fd10ce1a93dd53';
  private app_id = '857ad764';

  private httOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      'Accept-Language': 'en',
    }),
  };

  constructor(private http: HttpClient) { }

  searchRecipes(
    q: string,
    cuisineType?: string,
    mealType?: string
  ): Observable<any> {
    cuisineType = '';
    mealType = '';
    let url =
      this.baseUrl +
      '&q=' +
      q +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httOptions);
  }
  /*   fetchRecipes(dishType?: string): Observable<RecipeResponse[]> {
      let searchTerm: string;
  
      switch (dishType) {
        case 'appetizer':
          searchTerm = 'appetizer';
          break;
        case 'mainCourse':
          searchTerm = 'main course';
          break;
        case 'dessert':
          searchTerm = 'dessert';
          break;
        default:
          searchTerm = '';
      }
  
      return this.searchRecipes(searchTerm);
    } */
  fetchRecipes(
    q: string,
    dishType?: string
  ): Observable<any> {
    dishType = '';
    let url =
      this.baseUrl +
      '&q=' +
      q +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httOptions);
  }

  getRecipeById(id?: string): Observable<any> {
    let url =
      'https://api.edamam.com/api/recipes/v2/' +
      id +
      '?type=public' +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httOptions);
  }
  /*   getAppetizer(): Observable<RecipeResponse[]> {
      return this.searchRecipes('', '', 'appetizer');
    }
    getMainCourse(): Observable<RecipeResponse[]> {
      return this.searchRecipes('', '', 'main course');
    }
    getDessert(): Observable<RecipeResponse[]> {
      return this.searchRecipes('', '', 'dessert');
    } */
}
