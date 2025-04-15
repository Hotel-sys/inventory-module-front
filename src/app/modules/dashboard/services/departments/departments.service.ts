import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, DepartmentPayload } from '../../models/department';
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

  public getById(id: string): Observable<Department> {
    const endpoint = buildEndpoint(this.apiUrl, 'DEPARTMENT_BY_ID', id);

    return this.httpClient.get<Department>(endpoint);
  }

  public save(departmentPayload: DepartmentPayload): Observable<Department> {
    const endpoint = buildEndpoint(this.apiUrl, 'DEPARTMENTS_LIST');

    return this.httpClient.post<Department>(endpoint, departmentPayload);
  }

  public delete(id: string): Observable<unknown> {
    const endpoint = buildEndpoint(this.apiUrl, 'DEPARTMENT_BY_ID', id);

    return this.httpClient.delete(endpoint);
  }
}
