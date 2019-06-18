import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintManagementPageComponent } from './complaint-management-page.component';

describe('ComplaintManagementPageComponent', () => {
  let component: ComplaintManagementPageComponent;
  let fixture: ComponentFixture<ComplaintManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
