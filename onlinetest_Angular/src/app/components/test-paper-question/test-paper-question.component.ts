import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TestPaperQuestion } from 'src/app/models/test-paper-question.model';
import { TestPaperQuestionService } from 'src/app/services/test-paper-question.service';

@Component({
  selector: 'app-test-paper-question',
  templateUrl: './test-paper-question.component.html',
  styleUrls: ['./test-paper-question.component.scss']
})
export class TestPaperQuestionComponent implements OnInit {

  @Input() testPaperQuestion!:TestPaperQuestion;
  as1!:string;
  as2!:string;
  as3!:string;
  as4!:string;
  as5!:string;
  as6!:string;
  as7!:string;
  as8!:string;
  as9!:string;
  as10!:string;

  as1Selection:boolean=false;
  as2Selection:boolean=false;
  as3Selection:boolean=false;
  as4Selection:boolean=false;
  as5Selection:boolean=false;
  as6Selection:boolean=false;
  as7Selection:boolean=false;
  as8Selection:boolean=false;
  as9Selection:boolean=false;
  as10Selection:boolean=false;

  as1SelectionAttribute:any=null;
  as2SelectionAttribute:any=null;
  as3SelectionAttribute:any=null;
  as4SelectionAttribute:any=null;
  as5SelectionAttribute:any=null;
  as6SelectionAttribute:any=null;
  as7SelectionAttribute:any=null;
  as8SelectionAttribute:any=null;
  as9SelectionAttribute:any=null;
  as10SelectionAttribute:any=null;

  whenFormSubmitted(){
  this.as1SelectionAttribute=false;
  this.as2SelectionAttribute=false;
  this.as3SelectionAttribute=false;
  this.as4SelectionAttribute=false;
  this.as5SelectionAttribute=false;
  this.as6SelectionAttribute=false;
  this.as7SelectionAttribute=false;
  this.as8SelectionAttribute=false;
  this.as9SelectionAttribute=false;
  this.as10SelectionAttribute=false;
  }

  isSubmitted:boolean=false;

  asSelectionCheck():boolean{
    if(this.testPaperQuestion.a1==this.as1 ||
      this.testPaperQuestion.a1==this.as2 ||
      this.testPaperQuestion.a1==this.as3 ||
      this.testPaperQuestion.a1==this.as4 ||
      this.testPaperQuestion.a1==this.as5 ||
      this.testPaperQuestion.a1==this.as6 ||
      this.testPaperQuestion.a1==this.as7 ||
      this.testPaperQuestion.a1==this.as8 ||
      this.testPaperQuestion.a1==this.as9 ||
      this.testPaperQuestion.a1==this.as10){
        return true;
    }else{
      return false;
    }
  }

  as1SelectionManage(uf:any):void{
    if(this.as1Selection){
      this.as1Selection=false;
    }else{
      this.as1Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as2SelectionManage(uf:any):void{
    if(this.as2Selection){
      this.as2Selection=false;
    }else{
      this.as2Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as3SelectionManage(uf:any):void{
    if(this.as3Selection){
      this.as3Selection=false;
    }else{
      this.as3Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as4SelectionManage(uf:any):void{
    if(this.as4Selection){
      this.as4Selection=false;
    }else{
      this.as4Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as5SelectionManage(uf:any):void{
    if(this.as5Selection){
      this.as5Selection=false;
    }else{
      this.as5Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as6SelectionManage(uf:any):void{
    if(this.as6Selection){
      this.as6Selection=false;
    }else{
      this.as6Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as7SelectionManage(uf:any):void{
    if(this.as7Selection){
      this.as7Selection=false;
    }else{
      this.as7Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as8SelectionManage(uf:any):void{
    if(this.as8Selection){
      this.as8Selection=false;
    }else{
      this.as8Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as9SelectionManage(uf:any):void{    
    if(this.as9Selection){
      this.as9Selection=false;
    }else{
      this.as9Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }
  as10SelectionManage(uf:any):void{
    if(this.as10Selection){
      this.as10Selection=false;
    }else{
      this.as10Selection=true;
    }    
    
    if(this.asSelectionCheck()){
      this.testPaperQuestion.score=1;
    }else{
      this.testPaperQuestion.score=0;      
    }
    this.submit(uf);
    this.whenFormSubmitted();
    this.isSubmitted=true;
    
  }



  // _isChecked!:boolean;

  // get IsChecked(): boolean {
  //   return this._isChecked;
  // }
  // set IsChecked(val) {
  //   this._isChecked = val;
  // }

  i:number=1;

  constructor (private testPaperQuestionService:TestPaperQuestionService,
    public sanitizer: DomSanitizer){}  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.testPaperQuestion.as1=this.as1;
    this.testPaperQuestion.as2=this.as2;
    this.testPaperQuestion.as3=this.as3;
    this.testPaperQuestion.as4=this.as4;
    this.testPaperQuestion.as5=this.as5;
    this.testPaperQuestion.as6=this.as6;
    this.testPaperQuestion.as7=this.as7;
    this.testPaperQuestion.as8=this.as8;
    this.testPaperQuestion.as9=this.as9;
    this.testPaperQuestion.as10=this.as10;
    this.testPaperQuestion.score=0;

    this.testPaperQuestionService.update(this.testPaperQuestion.as_SERIAL_NO,this.testPaperQuestion)
    .subscribe(response=>{
      console.log(response)
    })
  }

  // as1UnChecked(){this.as1Selection=false}
  // as2UnChecked(){this.as2Selection=false}
  // as3UnChecked(){this.as3Selection=false}
  // as4UnChecked(){this.as4Selection=false}
  // as5UnChecked(){this.as5Selection=false}
  // as6UnChecked(){this.as6Selection=false}
  // as7UnChecked(){this.as7Selection=false}
  // as8UnChecked(){this.as8Selection=false}
  // as9UnChecked(){this.as9Selection=false}
  // as10UnChecked(){this.as10Selection=false}

  // as1Checked():void{this.as1Selection=true;}
  // as2Checked():void{this.as2Selection=true;}
  // as3Checked():void{this.as3Selection=true;}
  // as4Checked():void{this.as4Selection=true;}
  // as5Checked():void{this.as5Selection=true;}
  // as6Checked():void{this.as6Selection=true;}
  // as7Checked():void{this.as7Selection=true;}
  // as8Checked():void{this.as8Selection=true;}
  // as9Checked():void{this.as9Selection=true;}
  // as10Checked():void{this.as10Selection=true;}

  

  submit(userForm:any){

    console.log('Form Submitted!',userForm);

    // for(let j=0;j<=10;j++){
    //   if(""+"this.as"+j!=null){
    //     "this.testPaperQuestion.as"+j=""+"this.as"+j;
    //   }
    // }

    // if(this.as1!=null && !this.as1Selection){this.testPaperQuestion.as1=this.as1;}
    // if(this.as2!=null && !this.as2Selection){this.testPaperQuestion.as2=this.as2;}
    // if(this.as3!=null && !this.as3Selection){this.testPaperQuestion.as3=this.as3;}
    // if(this.as4!=null && !this.as4Selection){this.testPaperQuestion.as4=this.as4;}
    // if(this.as5!=null && !this.as5Selection){this.testPaperQuestion.as5=this.as5;}
    // if(this.as6!=null && !this.as6Selection){this.testPaperQuestion.as6=this.as6;}
    // if(this.as7!=null && !this.as7Selection){this.testPaperQuestion.as7=this.as7;}
    // if(this.as8!=null && !this.as8Selection){this.testPaperQuestion.as8=this.as8;}
    // if(this.as9!=null && !this.as9Selection){this.testPaperQuestion.as9=this.as9;}
    // if(this.as10!=null && !this.as10Selection){this.testPaperQuestion.as10=this.as10;}

    // if(this.as1!=null){this.testPaperQuestion.as1=this.as1;}
    // if(this.as2!=null){this.testPaperQuestion.as2=this.as2;}
    // if(this.as3!=null){this.testPaperQuestion.as3=this.as3;}
    // if(this.as4!=null){this.testPaperQuestion.as4=this.as4;}
    // if(this.as5!=null){this.testPaperQuestion.as5=this.as5;}
    // if(this.as6!=null){this.testPaperQuestion.as6=this.as6;}
    // if(this.as7!=null){this.testPaperQuestion.as7=this.as7;}
    // if(this.as8!=null){this.testPaperQuestion.as8=this.as8;}
    // if(this.as9!=null){this.testPaperQuestion.as9=this.as9;}
    // if(this.as10!=null){this.testPaperQuestion.as10=this.as10;}

    if(this.as1Selection){this.testPaperQuestion.as1=this.as1;}
    if(this.as2Selection){this.testPaperQuestion.as2=this.as2;}
    if(this.as3Selection){this.testPaperQuestion.as3=this.as3;}
    if(this.as4Selection){this.testPaperQuestion.as4=this.as4;}
    if(this.as5Selection){this.testPaperQuestion.as5=this.as5;}
    if(this.as6Selection){this.testPaperQuestion.as6=this.as6;}
    if(this.as7Selection){this.testPaperQuestion.as7=this.as7;}
    if(this.as8Selection){this.testPaperQuestion.as8=this.as8;}
    if(this.as9Selection){this.testPaperQuestion.as9=this.as9;}
    if(this.as10Selection){this.testPaperQuestion.as10=this.as10;}

    console.log(this.testPaperQuestion);

    this.testPaperQuestionService.update(this.testPaperQuestion.as_SERIAL_NO,this.testPaperQuestion)
    .subscribe(response=>{
      console.log(response)
    })
    // this.testPaperQuestionService.updateas(userForm.value,this.testPaperQuestion);    
  }

  // ifChecked(){
  //   this.i++;
  // }

  

}
