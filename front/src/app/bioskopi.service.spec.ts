import { TestBed, inject } from '@angular/core/testing';

import { BioskopiService } from './bioskopi.service';

describe('BioskopiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BioskopiService]
    });
  });

  it('should be created', inject([BioskopiService], (service: BioskopiService) => {
    expect(service).toBeTruthy();
  }));
});
