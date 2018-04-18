import { LoggedInUser } from './../models/logged-in-user';
import { LoginUserService } from './../login/login-user.service';
import { CheckLoginService } from './check-login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  isLoggedIn: boolean;
  user: LoggedInUser;
  numberOfRequests = '';
  constructor(private router: Router, private checkloginService: CheckLoginService,
              private loginUserService: LoginUserService) { }

  ngOnInit() {
    if (sessionStorage.getItem(TOKEN_KEY) != null) {
      this.getUser();
      this.isLoggedIn = true;
    }
    this.checkloginService.change.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    console.log(this.isLoggedIn);
  }

  getUser() {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        if (this.user.zahtevi.length !== 0) {
          this.numberOfRequests = '(' + this.user.zahtevi.length.toString() + ')';
        }
      }
    );
  }

  logout(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.router.navigate(['login']);
    this.checkloginService.toggle();
  }

}
