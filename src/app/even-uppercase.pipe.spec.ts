/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { EvenUppercasePipe } from './even-uppercase.pipe';

describe('Pipe: EvenUppercase', () => {
  it('create an instance', () => {
    let pipe = new EvenUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
