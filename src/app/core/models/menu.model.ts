import { UserRole } from 'src/app/modules/dashboard/models/user';

export interface MenuItem {
  group: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<SubMenuItem>;
}

export interface SubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  role: UserRole;
  children?: Array<SubMenuItem>;
}
