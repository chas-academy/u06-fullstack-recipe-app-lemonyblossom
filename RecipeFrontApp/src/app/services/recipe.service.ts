import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeResponse } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_id = 'e2706d13';
  private app_key = '74499ac92f2f41f8eb129213812c7a03';


  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }


  //get the recipe that match the searchterm.
  getRecipes(searchTerm: string): Observable<any> {
    let url = this.baseUrl + '&q=' + searchTerm + '&app_id=' + this.app_id + '&app_key=' + this.app_key;
    return this.http.get<any>(url, this.httpOptions);
  }
}
