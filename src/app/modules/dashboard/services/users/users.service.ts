import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { buildEndpoint } from 'src/app/core/constants/api-routes';
import { IUser } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Observable<IUser[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'USERS_LIST')

    return this.httpClient.get<IUser[]>(endpoint);
  }

  public getById(id: string) {
    const endpoint = buildEndpoint(this.apiUrl, 'USER_BY_ID', id);

    return this.httpClient.get(endpoint);
  }
}
