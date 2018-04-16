import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Skala } from '../models/skala.model';
import { NovaSkala } from '../models/nova-skala.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SkalaService{
  private url = 'http://localhost:8080/skala';

  getSkalas(): Observable<Skala[]>{
    return this.http.get<Skala[]>(this.url);
  }

  insertSkala(skala: NovaSkala): Observable<NovaSkala>{
    return this.http.post<NovaSkala>(this.url, skala, httpOptions).pipe(
      catchError(this.handleError<NovaSkala>('insertSkala'))
    );
  }

  updateSkala(skala: Skala): Observable<Skala>{
    const id = typeof skala === 'string' ? skala : skala.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Skala>(url, skala, httpOptions).pipe(
      catchError(this.handleError<Skala>('updateSkala'))
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
