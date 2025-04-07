import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { expensesResolver } from './expenses.resolver';

describe('expensesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => expensesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
