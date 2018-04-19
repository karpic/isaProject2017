import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sala } from './models/sala';
import { NovaSala } from './models/nova-sala';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SalaService {

  private url = 'http://localhost:8080/sale';
  
  getSale(): Observable<Sala[]>{
    return this.http.get<Sala[]>(this.url);

  }
  getSala(id: string): Observable<Sala>{
    return this.http.get<Sala>(this.url+'/'+id);
  }

  insertSala(sala: NovaSala): Observable<NovaSala>{
    return this.http.post<NovaSala>(this.url, sala, httpOptions).pipe(
      catchError(this.handleError<NovaSala>('insertSala'))
    );
  }

  updateSala(sala: Sala): Observable<Sala> {
    const id = typeof sala === 'string' ? sala : sala.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Sala>(url, sala, httpOptions).pipe(
      catchError(this.handleError<Sala>('updateSala'))
    );
  }

  deleteSala(sala: Sala | string): Observable<Sala> {
    const id = typeof sala === 'string' ? sala : sala.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Sala>(url, httpOptions).pipe(
      catchError(this.handleError<Sala>('deleteSala'))
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
