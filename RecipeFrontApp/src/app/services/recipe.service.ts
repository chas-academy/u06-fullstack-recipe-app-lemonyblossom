import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { RecipeResponse } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = '74499ac92f2f41f8eb129213812c7a03';
  private app_id = 'e2706d13';

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

  getRecipeById(id?: string): Observable<any> {
    let url =
      'https://api.edamam.com/api/recipe/v2/' +
      id +
      '?type=public' +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httOptions);
  }
}
