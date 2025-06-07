import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const superAdminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // if (tokenService.isGuest()) {
  //   router.navigate(['/auth/sign-in']);
  //   return false;
  // }

  if (!tokenService.hasRole('SUPERADMIN')) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
