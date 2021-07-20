import { TestBed } from '@angular/core/testing';

import { RestCategoryServiceService } from './rest-category-service.service';

describe('RestCategoryServiceService', () => {
  let service: RestCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
