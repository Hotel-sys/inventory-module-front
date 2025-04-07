import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { UbButtonDirective } from 'src/app/shared/components/button';

@Component({
  selector: 'app-error404',
  imports: [AngularSvgIconModule, UbButtonDirective],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css',
})
export class Error404Component {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
