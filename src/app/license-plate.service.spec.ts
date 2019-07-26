import { TestBed } from '@angular/core/testing';

import { LicensePlateService } from './license-plate.service';

describe('LicensePlateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicensePlateService = TestBed.get(LicensePlateService);
    expect(service).toBeTruthy();
  });
});
