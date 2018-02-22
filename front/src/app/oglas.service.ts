import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Oglas } from './models/oglas';

@Injectable()
export class OglasService {
  private url = 'http://localhost:8080/oglasi';

  getOglasi(): Observable<Oglas[]>{
    return this.http.get<Oglas[]>(this.url);
  }

  constructor(private http: HttpClient) { }

}
