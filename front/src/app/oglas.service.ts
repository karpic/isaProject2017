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

  insertOglas(oglas: Oglas): Observable<Oglas>{
    return this.http.post<Oglas>(this.url, oglas, httpOptions).pipe(
      catchError(this.handleError<Oglas>('insertOglas'))
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
