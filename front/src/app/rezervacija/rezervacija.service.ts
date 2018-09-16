import { Observable } from 'rxjs/Observable';
import { Rezervacija } from './../models/rezervacija';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RezervacijaService {

  private url = 'http://localhost:8080/reservation';

  insertRezervacija(email: string, rezervacija: Rezervacija): Observable<Rezervacija> {
    console.log(this.url + '/' + email + '/');
    return this.http.post<Rezervacija>(this.url + '/' + email + '/', rezervacija, httpOptions);
  }

  constructor(private http: HttpClient) { }

}
