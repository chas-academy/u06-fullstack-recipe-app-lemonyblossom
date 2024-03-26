import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { LoggedInUser } from '../interfaces/loggedinuser';
import { LoginDetails } from '../interfaces/login-details';
/* interface ResultData {
  token: string
}

interface RegisterDetails {

} */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  //Denna url kommer ändras när vi deployar  https://angular-laravel-deploy-show.onrender.com/api/!!!
  private baseUrl = 'http://127.0.0.1:8000/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }



  private updateLoginState(loginState: boolean) {
    this.loggedIn.next(loginState);
  }
  //only for me to see
  getLoginStatus() {
    return this.loggedIn.value;
  }


  login(loginDetails: LoginDetails) {
    this.http.post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        this.updateLoginState(true);
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + result.token);
      })
  }

  logOut() {
    this.http.post<any>(this.baseUrl + 'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        this.updateLoginState(false);
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer ");
      })
  }

  getCurrentUser() {
    let user: User;
    user = {
      id: 0,
      name: '',
      email: '',
    };
    this.http
      .get<User[]>(
        this.baseUrl + 'getUser/' + this.loggedIn.value.user?.id,
        this.httpOptions
      )
      .subscribe((res) => (user = res[0]));
    return user;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      // A client-side.
      console.error('An error occurred:', error.error);
    } else {
      // The backend.
      console.error(
        `Backend returned code ${error.status}`);
    }
    return throwError(() => new Error('Something went wrong; Try again later.'));
  }
}