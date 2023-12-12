import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-paper-question',
  templateUrl: './test-paper-question.component.html',
  styleUrls: ['./test-paper-question.component.scss']
})
export class TestPaperQuestionComponent {

  @Input() testPaperQuestion:any;

}
