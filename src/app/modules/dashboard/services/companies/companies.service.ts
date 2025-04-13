import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../../models/company';
import { buildEndpoint } from 'src/app/core/constants/api-routes';

@Injectable({
  providedIn: 'root'
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
}
