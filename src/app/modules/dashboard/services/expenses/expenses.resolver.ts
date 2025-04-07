import { ResolveFn } from '@angular/router';

export const expensesResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
