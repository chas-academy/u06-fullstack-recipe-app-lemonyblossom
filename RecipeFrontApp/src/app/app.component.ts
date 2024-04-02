import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from './interfaces/loggedinuser';
import { LoginComponent } from './pages/login/login.component';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RecipeService } from './services/recipe.service';
import { RecipeResponse } from './interfaces/recipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'RecipeFrontApp';
  recipes: RecipeResponse[] = [];
  loggedIn$: Observable<LoggedInUser>;

  constructor(private auth: AuthService, private recipeService: RecipeService) {
    this.loggedIn$ = this.auth.loggedIn$;

  }

  ngOnInit(): void {

  }

  logout() {
    this.auth.logOut();
  }
}



