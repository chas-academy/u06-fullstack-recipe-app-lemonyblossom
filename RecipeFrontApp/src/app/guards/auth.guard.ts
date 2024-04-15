import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, pipe, tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {

  /*   const auth: AuthService = inject(AuthService);
  
    console.log(auth.getLoginStatus());
  
    return auth.getLoginStatus(); */
  return true
};