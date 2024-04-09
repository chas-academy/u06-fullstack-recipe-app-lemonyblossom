import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/user';
import { LoggedInUser } from '../interfaces/loggedinuser';
import { LoginDetails } from '../interfaces/login-details';
import { Registeruserinfo } from '../interfaces/registeruserinfo';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Denna url kommer ändras när vi deployar  https://angular-laravel-deploy-show.onrender.com/api/!!!
  private baseUrl = 'https://u06-fullstack-recipe-app-lemonyblossom.onrender.com/api/';
  //'http://127.0.0.1:8000/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  public loggedIn = new BehaviorSubject<LoggedInUser>({
    user: undefined,
    loginState: false
  });
  public loggedIn$: Observable<LoggedInUser> = this.loggedIn.asObservable();


  constructor(private http: HttpClient) { }

  updateLoginState(loginState: LoggedInUser) {
    this.loggedIn.next(loginState);
  }

  //only for me to see
  getLoginStatus() {
/*     return this.loggedIn.value;
 */    return this.loggedIn.value.loginState;

  }


  logIn(loginDetails: LoginDetails) {
    this.http.post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(res => {
        console.log(res);
        this.updateLoginState({
          user: res.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + res.token);
      })
  }

  logOut() {
    this.http.post<any>(this.baseUrl + 'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(res => {
        console.log(res);
        this.updateLoginState({
          user: undefined,
          loginState: false,
        });
        const token = localStorage.getItem("token") || '';
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + token);
      })
  }


  getCurrentUser(): Observable<User> {
    return this.http
      .get<User>(this.baseUrl + 'getUser/' + this.loggedIn.value.user?.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      //client-side
      console.error('An error occurred:', error.error);
    } else {
      // The backend
      console.error(
        `Backend returned code ${error.status}`);
    }
    return throwError(() => new Error('Something went wrong; Try again later.'));
  }


  register(registerDetails: any): Observable<any> {
    return this.http
      .post<any>(
        this.baseUrl + 'register',
        registerDetails,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }


}