import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company, CompanyPayload } from '../../models/company';
import { buildEndpoint } from 'src/app/core/constants/api-routes';
import { Department } from '../../models/department';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Observable<Company[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'COMPANY_LIST');

    return this.httpClient.get<Company[]>(endpoint);
  }

  public getById(id: string): Observable<Company> {
    const endpoint = buildEndpoint(this.apiUrl, 'COMPANY_BY_ID', id);

    return this.httpClient.get<Company>(endpoint);
  }

  public save(departmentPayload: CompanyPayload): Observable<Department> {
    const endpoint = buildEndpoint(this.apiUrl, 'COMPANY_LIST');

    return this.httpClient.post<Department>(endpoint, departmentPayload);
  }

  public delete(id: string): Observable<unknown> {
    const endpoint = buildEndpoint(this.apiUrl, 'COMPANY_BY_ID', id);

    return this.httpClient.delete(endpoint);
  }
}
