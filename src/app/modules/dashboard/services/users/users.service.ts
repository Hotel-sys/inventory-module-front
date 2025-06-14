import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { buildEndpoint } from 'src/app/core/constants/api-routes';
// import { IUser } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment.prod';
import { User, UserPayload } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Promise<User[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'USERS_LIST');

    return lastValueFrom(this.httpClient.get<User[]>(endpoint));
  }

  public getById(id: string): Promise<User> {
    const endpoint = buildEndpoint(this.apiUrl, 'USER_BY_ID', id);

    return lastValueFrom(this.httpClient.get<User>(endpoint));
  }

  public save(userPayload: UserPayload): Promise<User> {
    const endpoint = buildEndpoint(this.apiUrl, 'USERS_LIST');

    return lastValueFrom(
      this.httpClient.post<User>(endpoint, {
        ...userPayload,
        department: userPayload.department?.id === '' ? undefined : userPayload.department,
        company: userPayload.company?.id === '' ? undefined : userPayload.company,
      }),
    );
  }

  public delete(id: string): Observable<unknown> {
    const endpoint = buildEndpoint(this.apiUrl, 'USER_BY_ID', id);

    return this.httpClient.delete(id);
  }
}
