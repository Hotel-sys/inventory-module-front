import { Component } from '@angular/core';
import { UbButtonDirective } from 'src/app/shared/components/button';

@Component({
  selector: 'app-analytics',
  imports: [UbButtonDirective],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {}
