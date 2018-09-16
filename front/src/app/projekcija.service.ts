import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projekcija } from './models/projekcija';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjekcijaService {

  private url = 'http://localhost:8080/projekcije';


  getProjekcije(): Observable<Projekcija[]> {
    return this.http.get<Projekcija[]>(this.url);

  }
  getProjekcija(id: string): Observable<Projekcija> {
    return this.http.get<Projekcija>(this.url + '/' + id);
  }

  constructor(private http: HttpClient) { }

}
