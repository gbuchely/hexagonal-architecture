import { TestBed } from '@angular/core/testing';

import { PoemsService } from './poems.service';

describe('PoemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoemsService = TestBed.get(PoemsService);
    expect(service).toBeTruthy();
  });
});
