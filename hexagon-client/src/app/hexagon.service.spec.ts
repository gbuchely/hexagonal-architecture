import { TestBed } from '@angular/core/testing';

import { HexagonService } from './hexagon.service';

describe('HexagonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HexagonService = TestBed.get(HexagonService);
    expect(service).toBeTruthy();
  });
});
