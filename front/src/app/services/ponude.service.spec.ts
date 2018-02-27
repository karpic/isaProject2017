import { TestBed, inject } from '@angular/core/testing';

import { PonudeService } from './ponude.service';

describe('PonudeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PonudeService]
    });
  });

  it('should be created', inject([PonudeService], (service: PonudeService) => {
    expect(service).toBeTruthy();
  }));
});
