import { ResolveFn } from '@angular/router';

export const analyticsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
