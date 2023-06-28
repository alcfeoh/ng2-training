import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreViewComponent } from './store-view.component';

describe('StoreViewComponent', () => {
  let component: StoreViewComponent;
  let fixture: ComponentFixture<StoreViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreViewComponent]
    });
    fixture = TestBed.createComponent(StoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
