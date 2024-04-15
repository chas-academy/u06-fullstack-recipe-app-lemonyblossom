import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Registeruserinfo } from '../../interfaces/registeruserinfo';
import { Router } from '@angular/router';
import { LoginDetails } from '../../interfaces/login-details';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService, private router: Router) { }


  register() {

    if (this.registerForm.valid) {
      const userData: Registeruserinfo = {
        name: this.registerForm.value.name || '',
        email: this.registerForm.value.email || '',
        password: this.registerForm.value.password || '',
        password_confirmation: this.registerForm.value.password_confirmation || '',
      };

      this.auth
        .register(userData as Registeruserinfo)
        .subscribe(res => {
          console.log('User registered', res);
          const loginDetails: LoginDetails = {
            email: userData.email,
            password: userData.password,
          };

          // Log in registered user
          this.auth.logIn(loginDetails);
          this.router.navigateByUrl('/');
        },
          (error) => {
            console.error('Registration failed:', error);
          }
        );
    }
  }
}