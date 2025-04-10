import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../../models/department';
import { buildEndpoint } from 'src/app/core/constants/api-routes';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Observable<Department[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'DEPARTMENTS_LIST');

    return this.httpClient.get<Department[]>(endpoint);
  }
}
