import { AsyncPipe, CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggedInUser } from './interfaces/loggedinuser';
import { LoginComponent } from './pages/login/login.component';
/* import { LoginDetails } from './interfaces/login-details';
 */
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'RecipeFrontApp';
  loggedIn$: Observable<LoggedInUser>;

  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }

}
