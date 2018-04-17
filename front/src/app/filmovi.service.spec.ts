import { TestBed, inject } from '@angular/core/testing';

import { FilmoviService } from './filmovi.service';

describe('FilmoviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmoviService]
    });
  });

  it('should be created', inject([FilmoviService], (service: FilmoviService) => {
    expect(service).toBeTruthy();
  }));
});
