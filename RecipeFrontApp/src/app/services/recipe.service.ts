import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface RecipeResponse {
  //structure of the response 
  property1: string;
  property2: number;
  // Add more
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = '';
  private app_id = '';
  private app_key = '';


  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }


  //get the recipe and recipe details/data that has the data that match the searchterm.
  getRecipes(searchterm: string): Observable<RecipeResponse> {
    let quisineType = "American";
    let mealType = "Dinner";
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&cuisineType=" + quisineType + "&mealType=" + mealType;
    return this.http.get<any>(url, this.httpOptions);
  }
}
