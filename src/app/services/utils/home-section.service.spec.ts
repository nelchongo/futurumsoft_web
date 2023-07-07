import { TestBed } from '@angular/core/testing';

import { HomeSectionService } from './home-section.service';

describe('HomeSectionService', () => {
  let service: HomeSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
