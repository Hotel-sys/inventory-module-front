import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserRole } from 'src/app/modules/dashboard/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtPayload } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  http = inject(HttpClient);
  helper = new JwtHelperService();

  constructor() {}

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();

    if (token) {
      return this.helper.decodeToken<JwtPayload>(token);
    }
    return '';
  }

  hasRole(role: UserRole) {
    let user = this.jwtDecode() as User;
    // console.log(user);
    if (user.role == role) return true;
    else return false;
  }

  isGuest() {
    let user = this.jwtDecode() as User;
    if (user.role !== 'ADMIN' && user.role !== 'SUPERADMIN') return true;
    else return false;
  }

  getUsuarioLogado() {
    return this.jwtDecode() as User;
  }
}
