import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import {LicensePlateService} from '../license-plate.service';
import createSpyObj = jasmine.createSpyObj;
import {CurrencyRendererPipe} from '../currency-renderer.pipe';
import {By} from '@angular/platform-browser';

fdescribe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensePlateComponent, CurrencyRendererPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    component.buttonText = "Add to cart";
    component.plate = {
      "_id": "5a0c8ab27aecc7e77f4d73f0",
      "onSale": false,
      "picture": "http://angulartraining.com/plates/CA.png",
      "title": "2013 California My Tahoe license plate",
      "price": 9,
      "year": 2013,
      "state": "CA",
      "description": "Sunt irure nisi excepteur in ea consequat ad aliqua. Lorem duis in duis nisi sit. Cillum eiusmod ipsum mollit veniam consectetur ex eiusmod nisi laborum amet anim mollit non nulla. Lorem ea est exercitation nostrud consectetur officia laborum fugiat sint. Nostrud consequat magna officia minim et aute nostrud.\r\n"
    };
    component.currency = {currency: 'USD', exchangeRate: 1};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right license plate title', () => {
    const title = fixture.debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent)
      .toContain('2013 California My Tahoe license plate');
  });

  it('should display the right button text', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent)
      .toContain('Add to cart');
  });
});
