import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
      'Accept language': 'en'
    })
  }
  constructor(private http: HttpClient) { }

  getRecipes(searcgterm: string): Observable<any> {
    let quisinetype =
      let mealType =
        let url = this.baseUrl + "&q=" + searchterm + "&app_id" + this.app_id + "&app_key=" + 
  }
}
