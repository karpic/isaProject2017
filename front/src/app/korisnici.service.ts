import { Korisnik } from './models/korisnik';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KorisniciService {

  private url = 'http://localhost:8080/register';
  private urlBpAdmin = 'http://localhost:8080/register/bpadmin';
  private urlFanadmin = 'http://localhost:8080/register/fanadmin';
  private urlSysAdmin = 'http://localhost:8080/register/sysadmin';

  insertKorisnik(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(this.url, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('insertKorisnik'))
    );
  }

  isertBpAdmin(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(this.urlBpAdmin, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('isertBpAdmin'))
    );
  }

  isertFanadmin(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(this.urlFanadmin, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('isertFanadmin'))
    );
  }

  isertSysadmin(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(this.urlSysAdmin, korisnik, httpOptions).pipe(
      catchError(this.handleError<Korisnik>('isertSysadmin'))
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
