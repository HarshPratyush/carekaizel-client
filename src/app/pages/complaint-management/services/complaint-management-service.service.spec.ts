import { TestBed } from '@angular/core/testing';

import { ComplaintManagementServiceService } from './complaint-management-service.service';

describe('ComplaintManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintManagementServiceService = TestBed.get(ComplaintManagementServiceService);
    expect(service).toBeTruthy();
  });
});
