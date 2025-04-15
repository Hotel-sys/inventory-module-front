import { Category } from './category';
import { Company } from './company';
import { Department } from './department';

export class StockItem {
  id!: string;
  name!: string;
  description!: string;
  quantity!: number;
  unit!: string;
  archived!: boolean;

  company!: Company;
  department!: Department;
  categories!: Category[];
}

export class StockItemPayload extends StockItem {
  //@ts-ignore
  override department!: { id: string };

  //@ts-ignore
  override company!: { id: string };

  // @ts-ignore
  override categories: Category[];

  constructor(name?: string, description?: string, quantity?: number, unit?: string, archived?: boolean) {
    //@ts-ignore
    super(name, description, quantity, unit, archived);

    this.department = {
      id: '',
    };

    this.company = {
      id: '',
    };
  }
}
