import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })

};

@Injectable({
  providedIn: 'root'
})
export class InputService {

  private inputUrl = 'https://wy8xpj06j6.execute-api.us-east-1.amazonaws.com/qa/20449/calculate';  // URL to web api

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  postData(param1: string): Observable<string> {
    return this.http.post<string>(this.inputUrl, param1, httpOptions)
  }
}
