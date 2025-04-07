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
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Companies',
          route: '/dashboard/companies',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Departments',
          route: '/dashboard/departments',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Expenses',
          route: '/dashboard/expenses',
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Inventory',
          route: '/dashboard/stock-items',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'users',
          route: '/dashboard/users',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/lock-closed.svg',
        //   label: 'Auth',
        //   route: '/auth',
        //   children: [
        //     { label: 'Sign up', route: '/auth/sign-up' },
        //     { label: 'Sign in', route: '/auth/sign-in' },
        //     { label: 'Forgot Password', route: '/auth/forgot-password' },
        //     { label: 'New Password', route: '/auth/new-password' },
        //     { label: 'Two Steps', route: '/auth/two-steps' },
        //   ],
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
        //   label: 'Errors',
        //   route: '/errors',
        //   children: [
        //     { label: '404', route: '/errors/404' },
        //     { label: '500', route: '/errors/500' },
        //   ],
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/cube.svg',
        //   label: 'Components',
        //   route: '/components',
        //   children: [{ label: 'Table', route: '/components/table' }],
        // },
      ],
    },
  ];
}
