/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BindingsComponent } from './bindings.component';

describe('Component: Bindings', () => {
  it('should create an instance', () => {
    let component = new BindingsComponent();
    expect(component).toBeTruthy();
  });
});
