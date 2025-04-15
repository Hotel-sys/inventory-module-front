import { Component, inject, Input } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments/departments.service';

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
import { DepartmentsFormComponent } from '../departments-form/departments-form.component';

@Component({
  selector: 'app-departments-list',
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
    DepartmentsFormComponent,
  ],
  templateUrl: './departments-list.component.html',
  styleUrl: './departments-list.component.scss',
})
export class DepartmentsListComponent {
  @Input() departments: Department[] = [];

  private departmentService = inject(DepartmentsService);

  public handleDelete(id: string) {
    this.departmentService.delete(id).subscribe({
      next: (data) => {},
    });
  }
}
