import { Component, inject, Input } from '@angular/core';
import { UbDialogContentDirective } from './../../../../../shared/components/dialog';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { User } from '../../../models/user';
import {
  UbTableBodyDirective,
  UbTableCellDirective,
  UbTableDirective,
  UbTableHeadDirective,
  UbTableHeaderDirective,
  UbTableRowDirective,
} from 'src/app/shared/components/table';
import { StockItemsFormComponent } from '../stock-items-form/stock-items-form.component';
import { StockItem } from '../../../models/stock-item';
import { StockItemsService } from '../../../services/stock-items/stock-items.service';

@Component({
  selector: 'app-stock-items-list',
  imports: [
    UbButtonDirective,
    UbDialogTriggerDirective,
    UbTableDirective,
    UbTableRowDirective,
    UbTableHeadDirective,
    UbTableHeaderDirective,
    UbTableBodyDirective,
    UbTableCellDirective,
    UbDialogContentDirective,
    UbDialogTriggerDirective,
    StockItemsFormComponent,
  ],
  templateUrl: './stock-items-list.component.html',
  styleUrl: './stock-items-list.component.scss',
})
export class StockItemsListComponent {
  @Input() stockItems: StockItem[] = [];

  private stockItemService = inject(StockItemsService);

  public handleDelete(id: string) {
    this.stockItemService.delete(id).subscribe({
      next: (data) => {},
    });
  }
}
