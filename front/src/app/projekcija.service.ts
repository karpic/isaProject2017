import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projekcija } from './models/projekcija';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


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

  updateProjekcija(projekcijaPoz: Projekcija): Observable<Projekcija> {
    const id = typeof projekcijaPoz === 'string' ? projekcijaPoz : projekcijaPoz.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Projekcija>(url, projekcijaPoz, httpOptions).pipe(
      catchError(this.handleError<Projekcija>('updateProjekcijaPoz'))
    );
  }

  constructor(private http: HttpClient) { }


  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
