import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuardsService } from './can-deactivate-guards.service';

describe('CanDeactivateGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanDeactivateGuardsService = TestBed.get(CanDeactivateGuardsService);
    expect(service).toBeTruthy();
  });
});
