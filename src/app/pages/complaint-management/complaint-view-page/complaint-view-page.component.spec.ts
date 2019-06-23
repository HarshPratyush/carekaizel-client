import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintViewPageComponent } from './complaint-view-page.component';

describe('ComplaintViewPageComponent', () => {
  let component: ComplaintViewPageComponent;
  let fixture: ComponentFixture<ComplaintViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
