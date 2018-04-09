import { LoggedInUser } from './../models/logged-in-user';
import { LoginUserService } from './../login/login-user.service';
import { Component, OnInit } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  user: LoggedInUser = this.loginUserService.getLoggedInUser();

  constructor(private loginUserService: LoginUserService) { }

  ngOnInit() {

  }

}
