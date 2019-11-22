import { TestBed } from '@angular/core/testing';

import { TodayTaskListService } from './today-task-list.service';

describe('TodayTaskListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodayTaskListService = TestBed.get(TodayTaskListService);
    expect(service).toBeTruthy();
  });
});
