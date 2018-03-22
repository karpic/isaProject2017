import { NoviOglas } from './models/novi-oglas';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Oglas } from './models/oglas';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class OglasService {
  private url = 'http://localhost:8080/oglasi';

  getOglasi(): Observable<Oglas[]>{
    return this.http.get<Oglas[]>(this.url);
  }

  insertOglas(oglas: NoviOglas): Observable<NoviOglas>{
    return this.http.post<NoviOglas>(this.url, oglas, httpOptions).pipe(
      catchError(this.handleError<NoviOglas>('insertOglas'))
    );
  }

  updateOglas(oglas: Oglas): Observable<Oglas>{
    const id = typeof oglas === 'string' ? oglas : oglas.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Oglas>(url, oglas, httpOptions).pipe(
      catchError(this.handleError<Oglas>('updateOglas'))
    );
  }

  deleteOglas(oglas: Oglas | string): Observable<Oglas> {
    const id = typeof oglas === 'string' ? oglas : oglas.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Oglas>(url, httpOptions).pipe(
      catchError(this.handleError<Oglas>('deleteRekvizit'))
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
