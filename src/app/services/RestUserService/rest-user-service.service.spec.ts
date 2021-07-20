import { TestBed } from '@angular/core/testing';

import { RestUserServiceService } from './rest-user-service.service';

describe('RestUserServiceService', () => {
  let service: RestUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
