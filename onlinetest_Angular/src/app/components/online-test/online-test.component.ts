import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TestPaperQuestion } from 'src/app/models/test-paper-question.model';
import { TestPaperQuestionService } from 'src/app/services/test-paper-question.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
})
export class OnlineTestComponent implements OnInit {

  testPaperQuestion?:TestPaperQuestion;
  testPaperQuestions?:TestPaperQuestion[];
  currentTestPaperQuestion:TestPaperQuestion={};
  currentIndex=-1;
  QT1='';

  constructor(private testPaperQuestionService:TestPaperQuestionService,
    public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.testPaperQuestionService.getAll().subscribe({
      next:(data)=>{
        this.testPaperQuestions=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });

  }

  // retrieveTestPaperQuestions():void{
  //   this.testPaperQuestionService.getAll().subscribe({
  //     next:(data)=>{
  //       this.testPaperQuestions=data;
  //       console.log(data);
  //     },
  //     error:(e)=>console.error(e)
  //   });
  // }

  // refreshList():void{
  //   this.retrieveTestPaperQuestions();
  //   this.currentTestPaperQuestion={};
  //   this.currentIndex=-1;
  // }

  setActiveTestPaperQuestion(testPaperQuestion:TestPaperQuestion,index:number):void{
    this.currentTestPaperQuestion=testPaperQuestion;
    this.currentIndex=index;
  }

  

}
