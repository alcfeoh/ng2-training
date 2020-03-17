import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, NavigationComponent, JumbotronComponent, LicensePlateComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a navigation component with a title "License Plate Store" ', () => {
    expect(getTextContent('app-navigation .navbar-brand')).toBe('License Plate Store');
  });

  it('should display a jumbotron component with proper title and description ', () => {
    expect(getTextContent('app-jumbotron h1')).toBe('Welcome to our store');
    expect(getTextContent('app-jumbotron p')).toBe('Browse our collection of license plates');
  });

  it('should display one California license plate component', () => {
    expect(getTextContent('app-license-plate h2')).toBe('2013 California My Tahoe license plate');
    expect(getTextContent('app-license-plate h2.float-left')).toBe('$9');
    expect(getTextContent('app-license-plate button')).toContain('Add to cart');
  });

  it('should display a Javascript alert when clicking on "Add to cart" ', () => {
    spyOn(window, 'alert');
    fixture.debugElement.query(By.css('app-license-plate button')).triggerEventHandler('click', {});
    expect(window.alert).toHaveBeenCalledWith('Plate added to cart');
  });

  function getTextContent(selector: string): string {
    return fixture.debugElement.query(By.css(selector)).nativeElement.textContent;
  }
});


