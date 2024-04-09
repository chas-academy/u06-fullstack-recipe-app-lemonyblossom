import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Registeruserinfo } from '../../interfaces/registeruserinfo';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth: AuthService) { }

  /*  registerForm = {
     name: '',
     email: '',
     password: '',
     password_confirmation: '',
   } */

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
  });

  register() {
    const userData = this.registerForm.value;
    console.log(this.registerForm);
    this.auth
      .register(userData as Registeruserinfo)
      .subscribe(res => {
        console.log('User registered', res);
      });

  }
}