import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestPaperQuestion } from '../models/test-paper-question.model';

const baseUrl = 'http://localhost:8080/api/testPaperQuestions';

@Injectable({
  providedIn: 'root'
})
export class TestPaperQuestionService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<TestPaperQuestion[]> {
    return this.http.get<TestPaperQuestion[]>(baseUrl);
  }

  get(id: any): Observable<TestPaperQuestion> {
    return this.http.get<TestPaperQuestion>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // updateAnswerSelected(data: any[],tpq:any): void {
  //   for(let i=0;i<data.length;i++){        
  //     // this.http.patch(`${baseUrl}/`+(i+1)+`.as1`, data[i]);
  //     // this.http.patch(`${baseUrl}/`+(i+1), data[i]);

  //     this.get(i+1).subscribe({
  //       next:(dt)=>{
  //         tpq=dt;
  //         console.log(dt);
  //       },
  //       error:(e)=>console.error(e)
  //     });
  //     tpq.as1=data[i];
  //     this.http.put(`${baseUrl}/${i}`, tpq);

  //     // this.http.post((`${baseUrl}/($i+1)`).update({as1:data[i]}) );
  //   }
  //   // return this.http.put(`${baseUrl}`, data);
  // }

  // updateAnswerSelected(data: any[],tpq:any): void {

  // }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
