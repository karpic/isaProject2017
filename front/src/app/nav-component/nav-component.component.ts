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
  constructor(private router: Router, private checkloginService: CheckLoginService) { }

  ngOnInit() {
    this.isLoggedIn = this.checkloginService.getLoggedIn();
    this.checkloginService.change.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    console.log(this.isLoggedIn);
  }

  logout(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.router.navigate(['login']);
    this.checkloginService.toggle();
  }

}
