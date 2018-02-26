import { TestBed, inject } from '@angular/core/testing';

import { FreightService } from './freight.service';

describe('FreightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreightService]
    });
  });

  it('should be created', inject([FreightService], (service: FreightService) => {
    expect(service).toBeTruthy();
  }));
});
