import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (request, next) => {
  let router = inject(Router);

  let token = JSON.parse(localStorage.getItem('token') || '{}') as string;

  console.log('entrou aqui 1');
  if (token && !router.url.includes('/auth/sign-in')) {
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }

  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log('entrou aqui 2');

        if (err.status === 401) {
          window.alert('401 - tratar aqui');
          router.navigate(['/auth/sign-in']);
        } else if (err.status === 403) {
          window.alert('403 - tratar aqui');
          router.navigate(['/auth/sign-in']);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err);
    }),
  );
};
