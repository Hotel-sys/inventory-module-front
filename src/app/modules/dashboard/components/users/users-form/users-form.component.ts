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
import { injectMutation, injectQuery, QueryClient } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-users-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
  ],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css',
})
export class UsersFormComponent {
  userPayload: UserPayload = new UserPayload();

  private userService = inject(UsersService);
  private queryClient = inject(QueryClient);

  private departmentService = inject(DepartmentsService);
  private companyService = inject(CompaniesService);

  departments: IOption[] = [];
  companies: IOption[] = [];

  @Input() defaultUser?: User;
  @Output() handleSubmit = new EventEmitter<User>();

  user = injectQuery(() => ({
    queryKey: ['user', this.defaultUser?.id],
    queryFn: () => this.userService.getById(this.defaultUser?.id as string),
    enabled: !!this.defaultUser?.id,
    onSuccess: (data: User) => {
      this.userPayload = {
        ...data,
        department: data.department
          ? {
              id: data.department.id,
            }
          : undefined,
        company: data.company
          ? {
              id: data.company.id,
            }
          : undefined,
      };
    },
  }));

  mutation = injectMutation(() => ({
    mutationFn: (userPayload: UserPayload) => this.userService.save(userPayload),
    onSuccess: (data) => {
      this.handleSubmit.emit(data);
      this.queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  }));

  constructor() {
    this.getAllDepartments();
    this.getAllCompanies();

    console.log(this.defaultUser);
    // this.populateFields();
  }

  onSubmit() {
    this.mutation.mutate(this.userPayload);
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
