import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySwitcherComponent } from './currency-switcher.component';

describe('CurrencySwitcherComponent', () => {
  let component: CurrencySwitcherComponent;
  let fixture: ComponentFixture<CurrencySwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
