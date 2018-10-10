import { TestBed, inject } from '@angular/core/testing';

import {LicensePlateStore} from './plate.store';

describe('LicensePlateStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicensePlateStore]
    });
  });

  it('should be created', inject([LicensePlateStore], (service: LicensePlateStore) => {
    expect(service).toBeTruthy();
  }));
});
