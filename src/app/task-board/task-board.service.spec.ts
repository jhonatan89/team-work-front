import { TestBed } from '@angular/core/testing';

import { TaskBoardService } from './task-board.service';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskBoardService = TestBed.get(TaskBoardService);
    expect(service).toBeTruthy();
  });
});
