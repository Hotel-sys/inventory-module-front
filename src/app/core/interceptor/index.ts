import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

export function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
let router = inject(Router);

  let token = JSON.parse(localStorage.getItem('token') || '{}') as string;

  console.log('entrou aqui 1');
  if (token && !router.url.includes('/auth/sign-in')) {
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }
// eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiU1VQRVJBRE1JTiIsIm91dHJhY29pc2EiOiJ0ZXN0ZSIsImlkIjoiOTE3YjE5NTctZDA5ZS00ODFkLWJkMGItNmQ0OTM3MTFhNzQzIiwiZW1haWwiOiJ2aXRvcnRlc3RlQGdtYWlsLmNvbSIsInN1YiI6InZpdG9ydGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNzQ5NTA5MTMyLCJleHAiOjE3NDk1MTI3MzJ9.jXfzvJlT2CckjLcFcWbmtiSkxegO9kDVaxiiDp5vwW4
  return next(request)

  // return next(req).pipe(tap(event => {
  //   if (event.type === HttpEventType.Response) {
  //     console.log(req.url, 'returned a response with status', event.status);
  //   }
  // }));
}

// export const httpInterceptor: HttpInterceptorFn = (request, next) => {

  // .pipe(
    // catchError((err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     console.log('entrou aqui 2');

    //     if (err.status === 401) {
    //       window.alert('401 - tratar aqui');
    //       router.navigate(['/auth/sign-in']);
    //     } else if (err.status === 403) {
    //       window.alert('403 - tratar aqui');
    //       router.navigate(['/auth/sign-in']);
    //     } else {
    //       console.error('HTTP error:', err);
    //     }
    //   } else {
    //     console.error('An error occurred:', err);
    //   }

    //   return throwError(() => err);
    // }),
  // );
// };
