import { TestBed, inject } from '@angular/core/testing';

import { PredstaveService } from './predstave.service';

describe('PredstaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredstaveService]
    });
  });

  it('should be created', inject([PredstaveService], (service: PredstaveService) => {
    expect(service).toBeTruthy();
  }));
});
