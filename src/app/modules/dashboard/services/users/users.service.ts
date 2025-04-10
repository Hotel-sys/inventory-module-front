import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { buildEndpoint } from 'src/app/core/constants/api-routes';
// import { IUser } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Observable<User[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'USERS_LIST');

    return this.httpClient.get<User[]>(endpoint);
  }

  public getById(id: string): Observable<User> {
    const endpoint = buildEndpoint(this.apiUrl, 'USER_BY_ID', id);

    return this.httpClient.get<User>(endpoint);
  }
}
