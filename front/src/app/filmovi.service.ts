import { Injectable } from '@angular/core';
import { Filmovi } from './models/filmovi';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoviFilm } from './models/novi-film';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FilmoviService {

  private url = 'http://localhost:8080/filmovi';
  private urlBioskopi = 'http://localhost:8080/bioskopi/filmovi/{id}';


  getFilmovi(): Observable<Filmovi[]>{
    return this.http.get<Filmovi[]>(this.url);

  }
  getFilm(id: string): Observable<Filmovi>{
    return this.http.get<Filmovi>(this.url+'/'+id);
  }

  insertFilm(film: NoviFilm): Observable<NoviFilm>{
    return this.http.post<NoviFilm>(this.urlBioskopi, film, httpOptions).pipe(
      catchError(this.handleError<NoviFilm>('insertFilm'))
    );
  }

  updateFilm(film: Filmovi): Observable<Filmovi> {
    const id = typeof film === 'string' ? film : film.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Filmovi>(url, film, httpOptions).pipe(
      catchError(this.handleError<Filmovi>('updateFilm'))
    );
  }

  deleteFilm(film: Filmovi | string): Observable<Filmovi> {
    const id = typeof film === 'string' ? film : film.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Filmovi>(url, httpOptions).pipe(
      catchError(this.handleError<Filmovi>('deleteFilm'))
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
