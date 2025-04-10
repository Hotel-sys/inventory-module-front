export class User {
  name!: string;
  email!: string;
  password?: string;
  createdAt!: string;
  updatedAt!: string;
  id!: string;
  departmentId!: string;

  constructor(name?: string, email?: string) {
    this.name = name ?? '';
    this.email = email ?? '';
  }
}
