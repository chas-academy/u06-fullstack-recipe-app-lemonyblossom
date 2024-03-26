import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
/* import { LoginDetails } from './interfaces/login-details';
 */
import { Loggedinuser } from './interfaces/loggedinuser';
/* import { User } from './interfaces/user';
 */
import { Observable } from 'rxjs';
import { RecipeSearchComponent } from './pages/search/recipe-search.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RecipeSearchComponent, RecipeComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RecipeFrontApp';

  loggedIn$: Observable<Loggedinuser>;

  /* loginDetails: LoginDetails; */


  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }
}

/* login() {
  this.auth.loginUser(this.loginDetails);
}
logout() {
  this.auth.logOut();
} */


//allt fluff ska ingå här