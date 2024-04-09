import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from '../../interfaces/login-details';
import {
  FormGroup, FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDetails: LoginDetails;

  constructor(private auth: AuthService) {
    this.loginDetails = {
      email: '',
      password: '',
    };
  }
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  login() {
    this.auth.logIn(this.loginDetails);
  }
  logOut() {
    return this.auth.logOut();
  }
}

