import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateComponent } from './license-plate.component';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "../mock-data";
import {By} from "@angular/platform-browser";

describe('LicensePlateComponent', () => {
  let component: LicensePlateComponent;
  let fixture: ComponentFixture<LicensePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePlateComponent);
    component = fixture.componentInstance;
    component.plate = CALIFORNIA_PLATE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT display a "sale" tag if the plate is not on sale', () => {
    component.plate.onSale = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h2 img'))).toBeNull();
  });

  it('should display a "sale" tag if the plate is on sale', () => {
    component.plate.onSale = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h2 img')).nativeElement.src).toContain('/assets/sale.png');
  });

  it('should display a Javascript alert when clicking on "Add to cart" ', () => {
    spyOn(window, 'alert');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', {});
    expect(window.alert).toHaveBeenCalledWith('Plate added to cart');
  });

  it('should render USD prices without trailing zeroes ', () => {
    component.plate.price = 10.101;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h2.float-left')).nativeElement.textContent).toBe('$10.1');
    component.plate.price = 8.55;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h2.float-left')).nativeElement.textContent).toBe('$8.55');
  });
})
