import { Department } from './../../../models/department';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { StockItemsService } from '../../../services/stock-items/stock-items.service';
import { StockItem, StockItemPayload } from '../../../models/stock-item';
import { IOption } from 'src/app/core/models/globals.model';
import { FormsModule } from '@angular/forms';
import {
  UbDialogCloseDirective,
  UbDialogContentDirective,
  UbDialogHeaderDirective,
  UbDialogTitleDirective,
} from 'src/app/shared/components/dialog';
import { UbInputDirective } from 'src/app/shared/components/input';
import { UbButtonDirective } from 'src/app/shared/components/button';

@Component({
  selector: 'app-stock-items-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
    UbDialogCloseDirective,
  ],
  templateUrl: './stock-items-form.component.html',
  styleUrl: './stock-items-form.component.scss',
})
export class StockItemsFormComponent {
  stockItemPayload: StockItemPayload = new StockItemPayload();

  private stockItemService = inject(StockItemsService);

  private departmentService = inject(DepartmentsService);

  @Input() defaultStockItem?: StockItem;
  departments: IOption[] = [];

  @Output() handleSubmit = new EventEmitter<StockItem>();

  constructor() {
    this.getAllDepartments();

    this.populateFields();
  }

  onSubmit() {
    this.stockItemService.save(this.stockItemPayload).subscribe({
      next: (data) => {
        this.handleSubmit.emit(data);
      },
    });
  }

  private populateFields() {
    if (this.defaultStockItem) {
      this.stockItemService.getById(this.defaultStockItem.id).subscribe({
        next: (data) => {
          this.stockItemPayload = {
            ...data,
            department: {
              id: data.department?.id ?? '',
            },
          };
        },
      });
    }
  }

  private getAllDepartments() {
    this.departmentService.getAll().subscribe({
      next: (data) => {
        this.departments = data.map((department: Department) => ({
          key: department.id,
          value: department.name,
        }));
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
      },
    });
  }
}
