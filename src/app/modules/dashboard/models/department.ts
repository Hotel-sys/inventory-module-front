import { User } from './user';

export class Department {
  id!: string;
  name!: string;
  description!: string;
  users!: User[];
}

export interface IDepartmentOption {
  key: string;
  value: string;
}
