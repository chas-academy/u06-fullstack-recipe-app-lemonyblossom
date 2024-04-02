import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeResponse } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private app_id = '857ad764';
  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = '682012f9d9137867032989ab2a094cfb';


  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }


  //get the recipe that match the searchterm.
  getRecipe(searchTerm = "", cuisineType = "", mealType = "", dishType = ""): Observable<RecipeResponse> {
    let url = this.baseUrl + '&q=' + searchTerm + '&app_id=' + this.app_id + '&app_key=' + this.app_key;
    if (cuisineType) {
      url += "&cuisine_type=" + cuisineType;
    }
    if (mealType) {
      url += "&mealType=" + mealType;
    }
    if (dishType) {
      url += "&dishType=" + dishType;
    }
    return this.http.get<any>(url, this.httpOptions);
  }
}
