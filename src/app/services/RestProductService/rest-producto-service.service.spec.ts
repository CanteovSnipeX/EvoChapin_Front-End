import { TestBed } from '@angular/core/testing';

import { RestProductoServiceService } from './rest-producto-service.service';

describe('RestProductoServiceService', () => {
  let service: RestProductoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProductoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
