import { LoginUserService } from './../../login/login-user.service';
import { LoggedInUser } from './../../models/logged-in-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prijatelji',
  templateUrl: './prijatelji.component.html',
  styleUrls: ['./prijatelji.component.css']
})
export class PrijateljiComponent implements OnInit {

  user: LoggedInUser;

  constructor(private loginUserService: LoginUserService) { }

  getUser() {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }

  ngOnInit() {
    this.getUser();
  }

}
