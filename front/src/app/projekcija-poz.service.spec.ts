import { TestBed, inject } from '@angular/core/testing';

import { ProjekcijaPozService } from './projekcija-poz.service';

describe('ProjekcijaPozService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjekcijaPozService]
    });
  });

  it('should be created', inject([ProjekcijaPozService], (service: ProjekcijaPozService) => {
    expect(service).toBeTruthy();
  }));
});
