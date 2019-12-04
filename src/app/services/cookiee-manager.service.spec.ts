import { TestBed } from '@angular/core/testing';

import { CookieeManagerService } from './cookiee-manager.service';

describe('CookieeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieeManagerService = TestBed.get(CookieeManagerService);
    expect(service).toBeTruthy();
  });
});
