import { TestBed } from '@angular/core/testing';

import { TestPaperQuestionService } from './test-paper-question.service';

describe('TestPaperQuestionService', () => {
  let service: TestPaperQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPaperQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
