import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss'],
})
export class OurExpertiseComponent {
  constructor(private readonly router: Router) {}

  navigateToPage(url: string): void {
    this.router.navigate([`our-expertise/${url}`]);
  }
}
