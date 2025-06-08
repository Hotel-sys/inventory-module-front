import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from 'src/app/core/models/auth.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  // API = 'http://localhost:8080/api/auth/login';
  apiUrl = '';

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl.concat('/api/auth/login'), data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}
