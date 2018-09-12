import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import {CurrencyRendererPipe} from '../currency-renderer.pipe';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;
  let debugElement: DebugElement;

  const testPlate =  {
    "_id": "5a0c8ab27aecc7e77f4d73f0",
    "onSale": false,
    "picture": "http://angulartraining.com/plates/CA.png",
    "title": "2013 California My Tahoe license plate",
    "price": 9,
    "year": 2013,
    "state": "CA",
    "description": "Sunt irure nisi excepteur in ea consequat ad aliqua. Lorem duis in duis nisi sit. Cillum eiusmod ipsum mollit veniam consectetur ex eiusmod nisi laborum amet anim mollit non nulla. Lorem ea est exercitation nostrud consectetur officia laborum fugiat sint. Nostrud consequat magna officia minim et aute nostrud.\r\n"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensePlateComponent, CurrencyRendererPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.plate = testPlate;
    component.buttonText = 'Add to cart';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the right title', () => {
    const title = debugElement.query(By.css('h2')).nativeElement.textContent;
    expect(title).toContain('2013 California My Tahoe license plate');
  });

  it('should have the right button text', () => {
    const btnText = debugElement.query(By.css('button')).nativeElement.textContent;
    expect(btnText).toContain('Add to cart');
  });
});
