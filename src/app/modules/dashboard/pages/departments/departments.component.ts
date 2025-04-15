import { Component, inject, OnInit, signal } from '@angular/core';
import { DepartmentsService } from '../../services/departments/departments.service';
import { Department } from '../../models/department';
import { DepartmentsListComponent } from '../../components/departments/departments-list/departments-list.component';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { DepartmentsFormComponent } from '../../components/departments/departments-form/departments-form.component';

@Component({
  selector: 'app-departments',
  imports: [DepartmentsListComponent, UbButtonDirective, UbDialogTriggerDirective, DepartmentsFormComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
})
export class DepartmentsComponent implements OnInit {
  private httpClient = inject(DepartmentsService);
  public departments = signal<Department[]>([]);

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): any {
    return this.httpClient.getAll().subscribe({
      next: (data) => {
        this.departments.set(data);
      },
    });
  }
}
