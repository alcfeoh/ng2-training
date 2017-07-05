/* tslint:disable:no-unused-variable */

import {TestBed, ComponentFixture} from '@angular/core/testing';
import { JasmineTestComponent } from './jasmine-test.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

let comp:    JasmineTestComponent;
let fixture: ComponentFixture<JasmineTestComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('JasmineTestComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ JasmineTestComponent ], // declare the test component
    });
    fixture = TestBed.createComponent(JasmineTestComponent);
    comp = fixture.componentInstance; // JasmineTestComponent test instance

  });

  it('should display the right text', () =>{
    // query for <p> by CSS element selector
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    expect(el.innerText).toBe('jasmine-test works!');
  })
});
