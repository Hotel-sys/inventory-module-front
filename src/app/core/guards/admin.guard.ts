import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.isGuest()) {
    router.navigate(['/auth/sign-in']);
    return false;
  }

  if (!tokenService.hasRole('ADMIN')) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
