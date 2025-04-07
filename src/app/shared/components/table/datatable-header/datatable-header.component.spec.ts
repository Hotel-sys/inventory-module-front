import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableHeaderComponent } from './datatable-header.component';

describe('DatatableHeaderComponent', () => {
  let component: DatatableHeaderComponent;
  let fixture: ComponentFixture<DatatableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
