import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Ponuda } from '../models/ponuda';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PonudeService {
  private url = 'http://localhost:8080/ponude';
  private baseServerUrl = 'http://localhost:8080';

  getPonude(): Observable<Ponuda[]>{
    return this.http.get<Ponuda[]>(this.url);
  }

  getPonudeByOglasId(oglasId: String): Observable<Ponuda[]>{
    const url = `${this.baseServerUrl}/oglasi/${oglasId}/ponude`;
    return this.http.get<Ponuda[]>(url);
  }

  getPonudeByUserId(userId: String): Observable<Ponuda[]>{
    const url = `${this.baseServerUrl}/ponude/korisnik/${userId}`;
    return this.http.get<Ponuda[]>(url);

  }

  getPonudeByUserName(username: String): Observable<Ponuda[]>{
    const url = `${this.baseServerUrl}/ponude/korisnik/${username}`;
    return this.http.get<Ponuda[]>(url);
  }


  insertPonuda(ponuda: Ponuda): Observable<Ponuda>{
    return this.http.post<Ponuda>(this.url, ponuda, httpOptions).pipe(
      catchError(this.handleError<Ponuda>('insertPonuda'))
    );
  }

  updatePonuda(ponuda: Ponuda): Observable<Ponuda>{
    const id = typeof ponuda === 'string' ? ponuda : ponuda.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Ponuda>(url, ponuda, httpOptions).pipe(
      catchError(this.handleError<Ponuda>('updatePonuda'))
    );
  }

  deletePonuda(ponuda: Ponuda | string): Observable<Ponuda> {
    const id = typeof ponuda === 'string' ? ponuda : ponuda.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Ponuda>(url, httpOptions).pipe(
      catchError(this.handleError<Ponuda>('deleteRekvizit'))
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
