import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from '../../interfaces/login-details';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDetails: LoginDetails;

  constructor(private auth: AuthService) {
    this.loginDetails = {
      email: 'lilp@lilp.lilp',
      password: 'lilplilp',
    };
  }
  login() {
    this.auth.loginUser(this.loginDetails);
  }
}