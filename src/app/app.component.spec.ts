import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {HttpClient} from "@angular/common/http";
import {FAKE_HTTP_CLIENT} from "./license-plate.service.spec";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, NavigationComponent, JumbotronComponent, LicensePlateComponent ],
      providers: [{provide: HttpClient, useValue: FAKE_HTTP_CLIENT}]
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

  it('should display eight different license plates', () => {
    const plates = fixture.debugElement.queryAll(By.css('app-license-plate'));
    expect(plates.length).toBe(8);
    expect(getTextContent('h2', plates[0])).toContain('2008 Georgia license plate');
    expect(getTextContent('h2', plates[1])).toContain('2015 New Jersey license plate');
    expect(getTextContent('h2', plates[2])).toContain('2013 California My Tahoe license plate');
    expect(getTextContent('h2', plates[7])).toContain('2007 Pennsylvania license plate');
  });

  it('should alternate the background color of the license plates', () => {
    const plates = fixture.debugElement.queryAll(By.css('app-license-plate'));
    expect(plates[0].nativeElement.style.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(plates[1].nativeElement.style.backgroundColor).toBe('');
    expect(plates[2].nativeElement.style.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(plates[3].nativeElement.style.backgroundColor).toBe('');
    expect(plates[4].nativeElement.style.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(plates[5].nativeElement.style.backgroundColor).toBe('');
    expect(plates[6].nativeElement.style.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(plates[7].nativeElement.style.backgroundColor).toBe('');
  });

  function getTextContent(selector: string, debugElement = fixture.debugElement): string {
    return debugElement.query(By.css(selector)).nativeElement.textContent;
  }
});


