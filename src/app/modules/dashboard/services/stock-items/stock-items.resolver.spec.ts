import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { stockItemsResolver } from './stock-items.resolver';

describe('stockItemsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => stockItemsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
