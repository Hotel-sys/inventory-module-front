import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Department, DepartmentPayload } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments/departments.service';
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
  selector: 'app-departments-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
    UbDialogCloseDirective,
  ],
  templateUrl: './departments-form.component.html',
  styleUrl: './departments-form.component.scss',
})
export class DepartmentsFormComponent {
  departmentPayload: DepartmentPayload = new DepartmentPayload('', '', []);

  private departmentService = inject(DepartmentsService);

  @Input() defaultDepartment?: Department;
  departments: IOption[] = [];

  @Output() handleSubmit = new EventEmitter<Department>();

  constructor() {
    this.populateFields();
  }

  onSubmit() {
    this.departmentService.save(this.departmentPayload).subscribe({
      next: (data) => {
        this.handleSubmit.emit(data);
      },
    });
  }

  private populateFields() {
    if (this.defaultDepartment) {
      this.departmentService.getById(this.departmentPayload.id).subscribe({
        next: (data) => {
          this.departmentPayload = {
            ...data,
          };
        },
      });
    }
  }
}
