import { Component, effect, Input, OnInit } from '@angular/core';
import { UbButtonDirective } from 'src/app/shared/components/button';
import {
  UbDialogContentDirective,
  UbDialogHeaderDirective,
  UbDialogTitleDirective,
} from 'src/app/shared/components/dialog';
import { UbInputDirective } from 'src/app/shared/components/input';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { DepartmentSelectComponent } from '../../departments/department-select/department-select.component';

@Component({
  selector: 'app-users-form',
  imports: [
    UbDialogContentDirective,
    UbDialogHeaderDirective,
    UbDialogTitleDirective,
    UbInputDirective,
    UbButtonDirective,
    FormsModule,
    DepartmentSelectComponent,
  ],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css',
})
export class UsersFormComponent {
  userPayload: User = new User();

  constructor() {
    this.watchPayload();
  }

  onSubmit() {
    console.log('Form submitted:', this.userPayload);
  }

  test(item: string) {
    this.userPayload.departmentId = item;
    // console.log(item);
  }

  watchPayload() {
    effect(() => {
      console.log(this.userPayload);
    });
  }
}
