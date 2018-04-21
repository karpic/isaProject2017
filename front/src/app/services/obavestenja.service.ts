import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Obavestenje } from "../models/obavestenje.model";
import { of } from "rxjs/observable/of";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ObavestenjaService {
  private url = 'http://localhost:8080/obavestenja';

  getObavestenja(): Observable<Obavestenje[]>{
    return this.http.get<Obavestenje[]>(this.url);
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
