import { HttpClient } from '@angular/common/http';
import { ProjekcijaPoz } from './models/projekcijaPoz';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


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

  updateProjekcijaPoz(projekcijaPoz: ProjekcijaPoz): Observable<ProjekcijaPoz> {
    const id = typeof projekcijaPoz === 'string' ? projekcijaPoz : projekcijaPoz.id;
    const url = `${this.url}/${id}`;
    return this.http.put<ProjekcijaPoz>(url, projekcijaPoz, httpOptions).pipe(
      catchError(this.handleError<ProjekcijaPoz>('updateProjekcijaPoz'))
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
