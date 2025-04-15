import { Component, effect, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { UbButtonDirective } from 'src/app/shared/components/button';
import {
  UbDialogCloseDirective,
  UbDialogContentDirective,
  UbDialogHeaderDirective,
  UbDialogTitleDirective,
} from 'src/app/shared/components/dialog';
import { UbInputDirective } from 'src/app/shared/components/input';
import { User, UserPayload } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { DepartmentSelectComponent } from '../../departments/department-select/department-select.component';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { Department } from '../../../models/department';
import { IOption } from 'src/app/core/models/globals.model';
import { CompaniesService } from '../../../services/companies/companies.service';
import { Company } from '../../../models/company';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
    UbDialogCloseDirective,
  ],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css',
})
export class UsersFormComponent {
  userPayload: UserPayload = new UserPayload();

  private userService = inject(UsersService);

  private departmentService = inject(DepartmentsService);
  private companyService = inject(CompaniesService);

  departments: IOption[] = [];
  companies: IOption[] = [];

  @Input() defaultUser?: User;
  @Output() handleSubmit = new EventEmitter<User>();

  constructor() {
    this.getAllDepartments();
    this.getAllCompanies();

    this.populateFields();
  }

  onSubmit() {
    this.userService.save(this.userPayload).subscribe({
      next: (data) => {
        this.handleSubmit.emit(data);
      },
    });
  }

  private populateFields() {
    if (this.defaultUser) {
      // we are editing...

      this.userService.getById(this.defaultUser.id).subscribe({
        next: (data) => {
          this.userPayload = {
            ...data,
            department: {
              id: data.department?.id ?? '',
            },
            company: {
              id: data.company?.id ?? '',
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

  private getAllCompanies() {
    this.companyService.getAll().subscribe({
      next: (data) => {
        this.companies = data.map((company: Company) => ({
          key: company.id,
          value: company.name,
        }));
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
      },
    });
  }
}
