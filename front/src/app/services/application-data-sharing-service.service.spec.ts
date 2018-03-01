import { TestBed, inject } from '@angular/core/testing';

import { ApplicationDataSharingServiceService } from './application-data-sharing-service.service';

describe('ApplicationDataSharingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationDataSharingServiceService]
    });
  });

  it('should be created', inject([ApplicationDataSharingServiceService], (service: ApplicationDataSharingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
