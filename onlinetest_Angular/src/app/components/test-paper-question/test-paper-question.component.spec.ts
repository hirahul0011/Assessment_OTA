import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaperQuestionComponent } from './test-paper-question.component';

describe('TestPaperQuestionComponent', () => {
  let component: TestPaperQuestionComponent;
  let fixture: ComponentFixture<TestPaperQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestPaperQuestionComponent]
    });
    fixture = TestBed.createComponent(TestPaperQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
