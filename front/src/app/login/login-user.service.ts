import { LoggedInUser } from './../models/logged-in-user';
import { UserComponent } from './../user/user.component';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const TOKEN_KEY = 'AuthToken';

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

  constructor(private http: HttpClient) { }



}
