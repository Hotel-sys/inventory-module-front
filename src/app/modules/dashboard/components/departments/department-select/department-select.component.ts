import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { Department, IDepartmentOption } from '../../../models/department';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-select',
  imports: [FormsModule],
  templateUrl: './department-select.component.html',
  styleUrl: './department-select.component.css',
})
export class DepartmentSelectComponent {
  private departmentService = inject(DepartmentsService);

  departments: IDepartmentOption[] = [];
  departmentsList: string[] = [];

  @Output() onDepartmentSelect = new EventEmitter<string>();

  constructor() {
    this.getAll();
  }

  handleDepartmentSelect(event: Event) {
    console.log(event);
    this.onDepartmentSelect.emit((event.target as HTMLSelectElement).value);
  }

  private getAll() {
    this.departmentService.getAll().subscribe({
      next: (data) => {
        this.departments = data.map((department: Department) => ({
          key: department.id,
          value: department.name,
        }));
        this.departmentsList = data.map((department: Department) => department.name);
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
      },
    });
  }
}
