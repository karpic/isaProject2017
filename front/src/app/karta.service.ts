import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Karta } from './models/karta';
import { catchError, map, tap } from 'rxjs/operators';
import { NovaKarta } from './models/nova-karta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

@Injectable()
export class KartaService {

  private url = 'http://localhost:8080/karte';
  private urlBioskopi = 'http://localhost:8080/karte/bioskopi/{id}';

  constructor(private http: HttpClient) { }


 getKarte(): Observable<Karta[]>{
    return this.http.get<Karta[]>(this.url);

  }

  getKarta(id: string): Observable<Karta>{
    return this.http.get<Karta>(this.url+'/'+id);
  }

  insertKarta(karta: NovaKarta): Observable<NovaKarta> {
    return this.http.post<NovaKarta>(this.url, karta, httpOptions).pipe(
      catchError(this.handleError<NovaKarta>('insertKarta'))
    );
  }


  deleteKarta(karta: Karta | string): Observable<Karta> {
    const id = typeof karta === 'string' ? karta : karta.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Karta>(url, httpOptions).pipe(
      catchError(this.handleError<Karta>('deleteKarta'))
    );
  }


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
