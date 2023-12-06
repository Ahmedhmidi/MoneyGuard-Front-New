import { TestBed } from '@angular/core/testing';

import { ProviderApplicationService } from './provider-application.service';

describe('ProviderApplicationService', () => {
  let service: ProviderApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
