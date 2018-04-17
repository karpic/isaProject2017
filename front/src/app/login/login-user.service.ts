import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { LoggedInUser } from './../models/logged-in-user';
import { UserComponent } from './../user/user.component';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const TOKEN_KEY = 'AuthToken';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginUserService {

  user: LoggedInUser;
  private url = 'http://localhost:8080/user';

  getUser(): Observable<LoggedInUser> {
     return this.http.get<LoggedInUser>(this.url + '/' + jwt_decode(sessionStorage.getItem(TOKEN_KEY)).sub + '/');
  }

  getLoggedInUser(): LoggedInUser {
    return this.user;
  }

  setLoggedInUser(user: LoggedInUser) {
    this.user = user;
  }

  updateUser(updateUser: LoggedInUser): Observable<LoggedInUser> {
    return this.http.put<LoggedInUser>(this.url + '/' + updateUser.email + '/' , updateUser, httpOptions).pipe(
      catchError(this.handleError<LoggedInUser>('updateUser'))
    );
  }

  getUserByname(ime: string, prezime: string): Observable<LoggedInUser[]> {
    return this.http.get<LoggedInUser[]>(this.url + '/parameters?ime=' + ime + '&' + 'prezime=' + prezime );
  }

  addFriend(user: LoggedInUser, to: string): Observable<LoggedInUser> {
    console.log(this.url + '/request?to=' + to);
    return this.http.put<LoggedInUser>(this.url + '/request?to=' + to, user, httpOptions).pipe(
      catchError(this.handleError<LoggedInUser>('addFriend')));
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
