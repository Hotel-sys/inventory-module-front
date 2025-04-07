import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableItemComponent } from './datatable-item.component';

describe('DatatableItemComponent', () => {
  let component: DatatableItemComponent;
  let fixture: ComponentFixture<DatatableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
