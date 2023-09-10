import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopmentSolutionsComponent } from './software-development-solutions.component';

describe('SoftwareDevelopmentSolutionsComponent', () => {
  let component: SoftwareDevelopmentSolutionsComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareDevelopmentSolutionsComponent]
    });
    fixture = TestBed.createComponent(SoftwareDevelopmentSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
