import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabC1Component } from './lab-c1.component';

describe('LabC1Component', () => {
  let component: LabC1Component;
  let fixture: ComponentFixture<LabC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
