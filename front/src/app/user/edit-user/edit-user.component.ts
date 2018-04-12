import { LoginUserService } from './../../login/login-user.service';
import { LoggedInUser } from './../../models/logged-in-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: LoggedInUser;

  constructor(private loginUserService: LoginUserService) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

  }

  update() {

  }

  ngOnInit() {
    this.getUser();
  }

}
