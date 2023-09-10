import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-we-serve-summary',
  templateUrl: './who-we-serve-summary.component.html',
  styleUrls: ['./who-we-serve-summary.component.scss'],
})
export class WhoWeServeSummaryComponent {
  @Input() showLearMore: boolean = false;

  constructor(private readonly router: Router) {}

  navigateToPage(url: string): void {
    this.router.navigate([`who-we-serve/${url}`]);
  }
}
