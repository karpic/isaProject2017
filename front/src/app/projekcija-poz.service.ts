import { HttpClient } from '@angular/common/http';
import { ProjekcijaPoz } from './models/projekcijaPoz';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProjekcijaPozService {

  private url = 'http://localhost:8080/projekcijePoz';


  getProjekcijePoz(): Observable<ProjekcijaPoz[]> {
    return this.http.get<ProjekcijaPoz[]>(this.url);

  }
  getProjekcijaPoz(id: string): Observable<ProjekcijaPoz> {
    return this.http.get<ProjekcijaPoz>(this.url + '/' + id);
  }

  constructor(private http: HttpClient) { }

}
