import { Component, inject, OnInit, signal } from '@angular/core';
import { StockItemsService } from '../../services/stock-items/stock-items.service';
import { StockItem } from '../../models/stock-item';
import { StockItemsListComponent } from '../../components/stock-items/stock-items-list/stock-items-list.component';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { StockItemsFormComponent } from '../../components/stock-items/stock-items-form/stock-items-form.component';

@Component({
  selector: 'app-stock-items',
  imports: [StockItemsListComponent, UbButtonDirective, UbDialogTriggerDirective, StockItemsFormComponent],
  templateUrl: './stock-items.component.html',
  styleUrl: './stock-items.component.css',
})
export class StockItemsComponent implements OnInit {
  private httpClient = inject(StockItemsService);
  public stockItems = signal<StockItem[]>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.getAll();
    // throw new Error('Method not implemented.');
  }

  public getAll(): any {
    this.isLoading.set(true);

    return this.httpClient.getAll().subscribe({
      complete: () => {
        this.isLoading.set(false);
      },
      next: (data) => {
        this.stockItems.set(data);
      },
    });
  }
}
