import { Rekvizit } from './models/rekvizit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RekvizitService {
  private url = 'http://localhost:8080/rekviziti';

  getRekviziti(): Observable<Rekvizit[]>{
    return this.http.get<Rekvizit[]>(this.url);
  }

  constructor(
    private http: HttpClient
  ) { }

}
