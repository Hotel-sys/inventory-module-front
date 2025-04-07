import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { analyticsResolver } from './analytics.resolver';

describe('analyticsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => analyticsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
