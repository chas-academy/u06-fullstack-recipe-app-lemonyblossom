import { Routes } from '@angular/router';
import { RecipeSearchComponent } from './pages/search/recipe-search.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
   { path: 'search', component: RecipeSearchComponent },
   { path: 'recipe', component: RecipeComponent },
   { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
   { path: 'login', component: LoginComponent },
/*    { path: 'logout', component: LoginComponent },
 */   { path: 'register', component: RegisterComponent },
];