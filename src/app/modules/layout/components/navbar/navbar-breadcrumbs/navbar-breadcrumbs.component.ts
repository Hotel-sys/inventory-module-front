import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  UbBreadcrumbDirective,
  UbBreadcrumbItemDirective,
  UbBreadcrumbLinkDirective,
  UbBreadcrumbListDirective,
  UbBreadcrumbPageDirective,
  UbBreadcrumbSeparatorComponent,
} from 'src/app/shared/components/breadcrumb';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-navbar-breadcrumbs',
  imports: [
    UbBreadcrumbDirective,
    UbBreadcrumbListDirective,
    UbBreadcrumbItemDirective,
    UbBreadcrumbLinkDirective,
    UbBreadcrumbSeparatorComponent,
    UbBreadcrumbPageDirective,
  ],
  templateUrl: './navbar-breadcrumbs.component.html',
  styleUrl: './navbar-breadcrumbs.component.css',
})
export class NavbarBreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.generateBreadcrumbs();
    });

    this.generateBreadcrumbs();
  }

  private generateBreadcrumbs(): void {
    this.breadcrumbs = [];
    let urlSegments = this.router.url.split('/').filter((segment) => segment);

    let path = '';
    for (let segment of urlSegments) {
      path += `/${segment}`;
      this.breadcrumbs.push({ label: segment, url: path });
    }
  }
}
