import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from '../../interfaces/login-details';
import {
  FormGroup, FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDetails: LoginDetails;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService, private router: Router) {
    this.loginDetails = {
      email: '',
      password: '',
    };
  }


  /*  login() {
     this.loginDetails = {
       email: this.loginForm.value.email || '',
       password: this.loginForm.value.password || '',
     }
     this.auth.logIn(this.loginDetails);
   } */

  async login() {
    this.loginDetails = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    };

    try {
      await this.auth.logIn(this.loginDetails);
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error here (e.g., display error message)
    }
  }

  logOut() {
    return this.auth.logOut();
  }
}

