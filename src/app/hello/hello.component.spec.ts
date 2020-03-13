import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import {By} from "@angular/platform-browser";

xdescribe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Hello John Angular"', () => {
    expect(fixture.debugElement.query(By.css('h2')).nativeElement.textContent).toBe('Hello John Angular');
  });
});
