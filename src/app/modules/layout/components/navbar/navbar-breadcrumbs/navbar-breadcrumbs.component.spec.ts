import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBreadcrumbsComponent } from './navbar-breadcrumbs.component';

describe('NavbarBreadcrumbsComponent', () => {
  let component: NavbarBreadcrumbsComponent;
  let fixture: ComponentFixture<NavbarBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBreadcrumbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
