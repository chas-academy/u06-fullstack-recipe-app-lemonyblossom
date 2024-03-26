import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { LoggedInUser } from './interfaces/loggedinuser';
import { LoginComponent } from './pages/login/login.component';
/* import { LoginDetails } from './interfaces/login-details';
 */
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RecipeSearchComponent } from './pages/search/recipe-search.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RecipeSearchComponent, RecipeComponent, AsyncPipe, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RecipeFrontApp';
  loggedIn$: Observable<LoggedInUser>;

  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }

  /*   loginDetails: LoginDetails = { email: '', password: '' };
   */

  /* login() {
    this.auth.login(this.loginDetails);
  }
  logout() {
    this.auth.logOut();
  } */
}


//allt fluff ska ingå här