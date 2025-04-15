import { Component, inject, Input } from '@angular/core';
import { UbDialogContentDirective } from './../../../../../shared/components/dialog';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import {
  UbTableBodyDirective,
  UbTableCellDirective,
  UbTableDirective,
  UbTableHeadDirective,
  UbTableHeaderDirective,
  UbTableRowDirective,
} from 'src/app/shared/components/table';
import { CompaniesFormComponent } from '../companies-form/companies-form.component';
import { CompaniesService } from '../../../services/companies/companies.service';
import { Company } from '../../../models/company';

@Component({
  selector: 'app-companies-list',
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
    CompaniesFormComponent,
  ],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss',
})
export class CompaniesListComponent {
  @Input() companies: Company[] = [];

  private companyService = inject(CompaniesService);

  public handleDelete(id: string) {
    this.companyService.delete(id).subscribe({
      next: (data) => {},
    });
  }
}
