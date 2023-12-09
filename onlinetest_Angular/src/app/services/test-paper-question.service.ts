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

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
