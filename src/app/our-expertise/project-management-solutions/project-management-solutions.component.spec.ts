import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementSolutionsComponent } from './project-management-solutions.component';

describe('ProjectManagementSolutionsComponent', () => {
  let component: ProjectManagementSolutionsComponent;
  let fixture: ComponentFixture<ProjectManagementSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectManagementSolutionsComponent]
    });
    fixture = TestBed.createComponent(ProjectManagementSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
