import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsMenuComponent } from './labs-menu.component';

describe('LabsMenuComponent', () => {
  let component: LabsMenuComponent;
  let fixture: ComponentFixture<LabsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
