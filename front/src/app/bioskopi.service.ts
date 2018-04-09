import { NoviBioskop } from './models/novi-bioskop.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bioskopi } from './models/bioskopi';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BioskopiService {

  private url = 'http://localhost:8080/bioskopi';
 

  getBioskopi(): Observable<Bioskopi[]>{
    return this.http.get<Bioskopi[]>(this.url);

  }
  getBioskop(id: string): Observable<Bioskopi>{
    return this.http.get<Bioskopi>(this.url+'/'+id);
  }

  insertBioskop(bioskop: NoviBioskop): Observable<NoviBioskop>{
    return this.http.post<NoviBioskop>(this.url, bioskop, httpOptions).pipe(
      catchError(this.handleError<NoviBioskop>('insertBioskop'))
    );
  }

  updateBioskop(bioskop: Bioskopi): Observable<Bioskopi>{
    const id = typeof bioskop === 'string' ? bioskop : bioskop.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Bioskopi>(url, bioskop, httpOptions).pipe(
      catchError(this.handleError<Bioskopi>('updateBioskop'))
    );
  }

  deleteBioskop(bioskop: Bioskopi | string): Observable<Bioskopi> {
    const id = typeof bioskop === 'string' ? bioskop : bioskop.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Bioskopi>(url, httpOptions).pipe(
      catchError(this.handleError<Bioskopi>('deleteBioskop'))
    );
  }

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
