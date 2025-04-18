import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsListComponent } from './stock-items-list.component';

describe('StockItemsListComponent', () => {
  let component: StockItemsListComponent;
  let fixture: ComponentFixture<StockItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
