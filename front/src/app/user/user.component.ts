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

  user: LoggedInUser = new LoggedInUser('' , '' , '' , '' , '' , [] , [] , [] , [] , []);
  isAdmin: boolean;

  constructor(private loginUserService: LoginUserService) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        console.log(this.user.roles);
        if (this.user.roles.includes("ROLE_ADMIN")) {
          this.isAdmin = true;
        }
      }
    );

  }

  ngOnInit() {
    this.getUser();
  }

}
