import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsFormComponent } from './stock-items-form.component';

describe('StockItemsFormComponent', () => {
  let component: StockItemsFormComponent;
  let fixture: ComponentFixture<StockItemsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
