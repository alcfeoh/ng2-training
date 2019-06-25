import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabA0Component } from './lab-a0.component';

describe('LabA0Component', () => {
  let component: LabA0Component;
  let fixture: ComponentFixture<LabA0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabA0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabA0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
