import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Registeruserinfo } from '../../interfaces/registeruserinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      password_confirmation: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
  registerUser(): void {
    if (this.registerForm.valid) {

      const registerDetails: Registeruserinfo = this.registerForm.value;
      this.auth.register(registerDetails).subscribe({
        next: () => {
          this.router.navigate(['/signin']);
        },

        error: (error) => {
          console.error('Error registering user:', error);
        },

        complete: () => {
          console.info('Registration process completed');
        }
      });
    }
  }
}
