import { StockItem, StockItemPayload } from './../../models/stock-item';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buildEndpoint } from 'src/app/core/constants/api-routes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StockItemsService {
  private apiUrl = '';
  private httpClient = inject(HttpClient);

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  public getAll(): Observable<StockItem[]> {
    const endpoint = buildEndpoint(this.apiUrl, 'STOCK_ITEMS_LIST');

    return this.httpClient.get<StockItem[]>(endpoint);
  }

  public getById(id: string): Observable<StockItem> {
    const endpoint = buildEndpoint(this.apiUrl, 'STOCK_ITEM_BY_ID', id);

    return this.httpClient.get<StockItem>(endpoint);
  }

  public save(userPayload: StockItemPayload): Observable<StockItem> {
    const endpoint = buildEndpoint(this.apiUrl, 'STOCK_ITEMS_LIST');

    return this.httpClient.post<StockItem>(endpoint, userPayload);
  }

  public delete(id: string): Observable<unknown> {
    const endpoint = buildEndpoint(this.apiUrl, 'STOCK_ITEM_BY_ID', id);

    return this.httpClient.delete(endpoint);
  }
}
