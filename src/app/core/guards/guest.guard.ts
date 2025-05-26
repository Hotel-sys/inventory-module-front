import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (!tokenService.hasRole('SUPERADMIN') && !tokenService.hasRole('ADMIN')) {
    if (route.title?.startsWith('auth')) {
      return true;
    }

    router.navigate(['/sign-in']);
    return true;
  }

  return false;
};
