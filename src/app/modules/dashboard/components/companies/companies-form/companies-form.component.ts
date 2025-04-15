import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

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
import { Company, CompanyPayload } from '../../../models/company';
import { StockItemsService } from '../../../services/stock-items/stock-items.service';
import { CompaniesService } from '../../../services/companies/companies.service';

@Component({
  selector: 'app-companies-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
    UbDialogCloseDirective,
  ],
  templateUrl: './companies-form.component.html',
  styleUrl: './companies-form.component.scss',
})
export class CompaniesFormComponent {
  companyPayload: CompanyPayload = new CompanyPayload();

  private companyService = inject(CompaniesService);

  @Input() defaultCompany?: Company;

  @Output() handleSubmit = new EventEmitter<Company>();

  constructor() {
    this.populateFields();
  }

  onSubmit() {
    this.companyService.save(this.companyPayload).subscribe({
      next: (data) => {
        this.handleSubmit.emit(data);
      },
    });
  }

  private populateFields() {
    if (this.defaultCompany) {
      this.companyService.getById(this.companyPayload.id).subscribe({
        next: (data) => {
          this.companyPayload = {
            ...data,
            userIds: [],
          };
        },
      });
    }
  }
}
