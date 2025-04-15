import { User } from './user';

export class Department {
  id!: string;
  name!: string;
  description!: string;
  users!: User[];
}

export class DepartmentPayload extends Department {
  constructor(name: string, description: string, users: User[]) {
    super();
    this.name = name;
    this.description = description;
    this.users = users;
  }
}
