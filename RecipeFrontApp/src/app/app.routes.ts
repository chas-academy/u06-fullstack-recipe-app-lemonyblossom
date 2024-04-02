import { Routes } from '@angular/router';
import { RecipeSearchComponent } from './pages/search/recipe-search.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
/* import { AppComponent } from './app.component';
 */
export const routes: Routes = [
/*    { path: '', component: AppComponent },
 *//*    { path: 'recipe', component: RecipeComponent },
 */   { path: 'recipe/:id', component: RecipeComponent },
  { path: 'search', component: RecipeSearchComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];