import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeServeComponent } from './who-we-serve.component';

describe('WhoWeServeComponent', () => {
  let component: WhoWeServeComponent;
  let fixture: ComponentFixture<WhoWeServeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoWeServeComponent]
    });
    fixture = TestBed.createComponent(WhoWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
