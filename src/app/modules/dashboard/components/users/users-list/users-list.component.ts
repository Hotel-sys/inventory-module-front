import { UbDialogContentDirective } from './../../../../../shared/components/dialog';
import { Component, Input, signal, Signal } from '@angular/core';
// import { IUser } from 'src/app/core/models/user.model';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { UsersFormComponent } from '../users-form/users-form.component';
import { User } from '../../../models/user';
import {
  UbTableBodyDirective,
  UbTableCellDirective,
  UbTableDirective,
  UbTableHeadDirective,
  UbTableHeaderDirective,
  UbTableRowDirective,
  // UbDialogTriggerDirective,
  // UbDialogContentDirective
} from 'src/app/shared/components/table';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'users-list',
  imports: [
    UbButtonDirective,
    UbDialogTriggerDirective,
    UsersFormComponent,
    UbTableDirective,
    UbTableRowDirective,
    UbTableHeadDirective,
    UbTableHeaderDirective,
    UbTableBodyDirective,
    UbTableCellDirective,
    UbDialogContentDirective,
    UbDialogTriggerDirective,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  @Input() users: User[] | undefined;
  @Input() isLoading: boolean | undefined;

  selectedUser = signal<User | undefined>(undefined);

  setSelectedUser(user?: User) {
    this.selectedUser.set(user);
  }
}
