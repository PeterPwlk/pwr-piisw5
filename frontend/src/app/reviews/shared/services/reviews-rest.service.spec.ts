import { TestBed } from '@angular/core/testing';

import { ReviewsRestService } from './reviews-rest.service';

describe('ReviewsRestService', () => {
  let service: ReviewsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
