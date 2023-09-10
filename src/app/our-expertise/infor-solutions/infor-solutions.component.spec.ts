import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforSolutionsComponent } from './infor-solutions.component';

describe('InforSolutionsComponent', () => {
  let component: InforSolutionsComponent;
  let fixture: ComponentFixture<InforSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InforSolutionsComponent]
    });
    fixture = TestBed.createComponent(InforSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
