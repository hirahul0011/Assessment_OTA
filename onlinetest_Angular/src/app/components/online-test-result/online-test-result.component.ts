import { Component } from '@angular/core';
import { TestPaperQuestion } from 'src/app/models/test-paper-question.model';
import { TestPaperQuestionService } from 'src/app/services/test-paper-question.service';

@Component({
  selector: 'app-online-test-result',
  templateUrl: './online-test-result.component.html',
  styleUrls: ['./online-test-result.component.scss']
})
export class OnlineTestResultComponent {

  testPaperQuestion!:TestPaperQuestion;
  testPaperQuestions!:TestPaperQuestion[];   
  totalScore:number=0;
  count:number=0;
  maxScore!:number;  
  percentInExam!:number;

  constructor(private testPaperQuestionService:TestPaperQuestionService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.testPaperQuestionService.getAll().subscribe({
      next:(data)=>{
        this.testPaperQuestions=data;
        console.log(data);


        this.maxScore=this.testPaperQuestions[1].scoreinexam as number;
        for(let i=0;i<this.testPaperQuestions.length;i++){
          this.testPaperQuestion=this.testPaperQuestions[i];            
          this.totalScore=(this.totalScore) + (this.testPaperQuestion.score as number)
    
          if(this.testPaperQuestion.score as number ==1){
            this.count++;
          }
        }
        this.percentInExam=(this.totalScore)/(this.maxScore)*100;


      },
      error:(e)=>console.error(e)
    });    

  }

  totalScoreCal():void{
    for(let i=0;i<this.testPaperQuestions.length;i++){
      this.testPaperQuestion=this.testPaperQuestions[i]
      console.log(this.testPaperQuestion)      
      this.totalScore=(this.totalScore) + (this.testPaperQuestion.score as number)

      if(this.testPaperQuestion.score as number ==1){
        this.count++;
      }
    }
    this.percentInExam=(this.totalScore)/(this.maxScore)*100;
  }

  



}
