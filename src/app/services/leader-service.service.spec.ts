import { TestBed } from '@angular/core/testing';

import { LeaderServiceService } from './leader-service.service';

describe('LeaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaderServiceService = TestBed.get(LeaderServiceService);
    expect(service).toBeTruthy();
  });
});
