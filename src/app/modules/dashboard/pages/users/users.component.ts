import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
// import { IUser } from 'src/app/core/models/user.model';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';
import { User } from '../../models/user';
import { UbButtonDirective } from 'src/app/shared/components/button';
import { UbDialogTriggerDirective } from 'src/app/shared/components/dialog';
import { UsersFormComponent } from '../../components/users/users-form/users-form.component';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-users',
  imports: [UsersListComponent, UbButtonDirective, UbDialogTriggerDirective, UsersFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  private httpClient = inject(UsersService);

  users = injectQuery(() => ({
    queryKey: ['users'],
    queryFn: () => this.httpClient.getAll(),
  }));

  constructor() {
    if (this.users.data()) {
      console.log(this.users.data());
    }
  }
}
