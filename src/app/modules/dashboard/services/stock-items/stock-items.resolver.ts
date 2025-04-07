import { ResolveFn } from '@angular/router';

export const stockItemsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
