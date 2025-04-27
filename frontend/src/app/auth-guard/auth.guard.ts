import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const jwtHelper = new JwtHelperService()
  const token = localStorage.getItem('token');

  try {
    const isExpired = jwtHelper.isTokenExpired(token);
    if (isExpired) {
      localStorage.removeItem('token');
      router.navigate(['/login']);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Invalid token detected:', error);
    localStorage.removeItem('token');
    router.navigate(['/login']);
    return false;
  }
};
