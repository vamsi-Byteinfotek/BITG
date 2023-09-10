import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeServeSummaryComponent } from './who-we-serve-summary.component';

describe('WhoWeServeSummaryComponent', () => {
  let component: WhoWeServeSummaryComponent;
  let fixture: ComponentFixture<WhoWeServeSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoWeServeSummaryComponent]
    });
    fixture = TestBed.createComponent(WhoWeServeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
