import { StockItem } from './stock-item';

export class Category {
  id!: string;
  name!: string;
  description!: string;

  stockItems!: StockItem[];
}
