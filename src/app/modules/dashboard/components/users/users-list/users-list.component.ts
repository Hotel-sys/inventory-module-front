import { Component, Input, signal, Signal } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { UbButtonDirective } from 'src/app/shared/components/button';

@Component({
  selector: 'users-list',
  imports: [UbButtonDirective],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  @Input() users: IUser[] = [];
  @Input() loadingState: boolean = false;
  
  

}
