import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter();

  constructor(
    private readonly router: Router
  ) {}

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  navigateToContactPage(): void {
    this.router.navigate(['/contact-us']);
  }

  navigateToPage(url: string, event: Event): void {
    event.stopPropagation();
    this.router.navigate([url]);
  }
}
