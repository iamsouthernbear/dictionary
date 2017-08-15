import { TestBed, inject } from '@angular/core/testing';

import { TaskCanDeactivateGuardService } from './task-can-deactivate-guard.service';

describe('TaskCanDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskCanDeactivateGuardService]
    });
  });

  it('should be created', inject([TaskCanDeactivateGuardService], (service: TaskCanDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
