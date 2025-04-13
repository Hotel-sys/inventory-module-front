import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { Department,  } from '../../../models/department';
import { FormsModule, NgModel } from '@angular/forms';
import { IOption } from 'src/app/core/models/globals.model';

@Component({
  selector: 'app-department-select',
  imports: [FormsModule],
  templateUrl: './department-select.component.html',
  styleUrl: './department-select.component.css',
})
export class DepartmentSelectComponent {
  private departmentService = inject(DepartmentsService);

  departments: IOption[] = [];
  departmentsList: string[] = [];

  // @NgModel model: string;
  @Output() model = new EventEmitter<string>();



  // handleDepartmentSelect(event: Event) {
  //   console.log(event);
  //   this.onDepartmentSelect.emit((event.target as HTMLSelectElement).value);
  // }


}
