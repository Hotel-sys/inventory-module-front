import { Component, Input } from '@angular/core';
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
} from 'src/app/shared/components/table';

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
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  @Input() users: User[] = [];
  @Input() loadingState: boolean = false;
}
