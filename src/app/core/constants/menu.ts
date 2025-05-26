import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Home',
          route: '/',
          role: 'ADMIN',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Companies',
          route: '/dashboard/companies',
          role: 'SUPERADMIN',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Departments',
          route: '/dashboard/departments',
          role: 'SUPERADMIN',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Expenses',
          route: '/dashboard/expenses',
          role: 'SUPERADMIN',
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Inventory',
          route: '/dashboard/stock-items',
          role: 'ADMIN',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'users',
          route: '/dashboard/users',
          role: 'SUPERADMIN',
        },
      ],
    },
  ];
}
