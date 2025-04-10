import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
// import { IUser } from 'src/app/core/models/user.model';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  imports: [UsersListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  private httpClient = inject(UsersService);
  public users = signal<User[]>([]);
  isLoading = signal(false);

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): any {
    this.isLoading.set(true);

    return this.httpClient.getAll().subscribe({
      complete: () => {
        this.isLoading.set(false);
      },
      next: (data) => {
        this.users.set(data);
      },
    });
  }
}
