import { TestBed, inject } from '@angular/core/testing';

import { RezervacijaService } from './rezervacija.service';

describe('RezervacijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RezervacijaService]
    });
  });

  it('should be created', inject([RezervacijaService], (service: RezervacijaService) => {
    expect(service).toBeTruthy();
  }));
});
