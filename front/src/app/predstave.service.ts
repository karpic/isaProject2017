import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Predstave } from './models/predstave';
import { NovaPredstava } from './models/nova-predstava';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PredstaveService {

  private url = 'http://localhost:8080/predstave';

  getPredstave(): Observable<Predstave[]> {
    return this.http.get<Predstave[]>(this.url);

  }
  getPredstava(id: string): Observable<Predstave> {
    return this.http.get<Predstave>(this.url + '/' + id);
  }

  insertPredstava(predstava: NovaPredstava): Observable<NovaPredstava> {
    return this.http.post<NovaPredstava>(this.url, predstava, httpOptions).pipe(
      catchError(this.handleError<NovaPredstava>('insertPredstava'))
    );
  }

  updatePredstava(predstava: Predstave): Observable<Predstave> {
    const id = typeof predstava === 'string' ? predstava : predstava.id;
    const url = `${this.url}/${id}`;
    return this.http.put<Predstave>(url, predstava, httpOptions).pipe(
      catchError(this.handleError<Predstave>('updatePrestava'))
    );
  }

  deletePredstava(predstava: Predstave | string): Observable<Predstave> {
    const id = typeof predstava === 'string' ? predstava : predstava.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Predstave>(url, httpOptions).pipe(
      catchError(this.handleError<Predstave>('deletePredstava'))
    );
  }

  getRepertoar(pozoristeId: string): Observable<Predstave[]> {
    return this.http.get<Predstave[]>(this.url + '/repertoar/' + pozoristeId, httpOptions);
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
