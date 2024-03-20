import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = '';
  private app_key = '';
  private app_id = '';

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(searchterm: string): Observable<any> {
    let quisineType = "American";
    let mealType = "Dinner";
    let url = this.baseUrl + "&q=" + searchterm + "&app_id" + this.app_id + "&app_key=" + this.app_key + "&cuisineType=" + quisineType + "&mealType" + mealType;
    return this.http.get<any>(url, this.httpOptions);
  }
}
