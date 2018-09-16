import { TestBed, inject } from '@angular/core/testing';

import { ProjekcijaService } from './projekcija.service';

describe('ProjekcijaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjekcijaService]
    });
  });

  it('should be created', inject([ProjekcijaService], (service: ProjekcijaService) => {
    expect(service).toBeTruthy();
  }));
});
