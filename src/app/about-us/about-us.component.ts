import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  constructor(private readonly router: Router) {}

  navigateToContactPage(): void {
    this.router.navigate(['/contact-us']);
  }
}
