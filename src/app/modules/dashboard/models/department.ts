import { User } from './user';

export class Department {
  id!: string;
  name!: string;
  description!: string;
  users!: User[];
}


