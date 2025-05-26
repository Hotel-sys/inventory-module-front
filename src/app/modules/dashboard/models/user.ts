import { Company } from './company';
import { Department } from './department';

export type UserRole = 'ADMIN' | 'SUPERADMIN';

export class User {
  name!: string;
  email!: string;
  password?: string;
  createdAt!: string;
  updatedAt!: string;
  id!: string;
  department?: Department;
  company?: Company;
  role: UserRole = 'ADMIN';

  constructor(name?: string, email?: string) {
    this.name = name ?? '';
    this.email = email ?? '';
    // this.department = {id: ''};
  }
}

export class UserPayload extends User {
  //@ts-ignore
  override department?: { id: string };

  //@ts-ignore
  override company?: { id: string };

  constructor(name?: string, email?: string) {
    super(name, email);

    this.department = {
      id: '',
    };

    this.company = {
      id: '',
    };
  }
}
