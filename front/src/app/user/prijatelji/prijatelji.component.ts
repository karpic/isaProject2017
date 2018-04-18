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
  friends: LoggedInUser[];

  constructor(private loginUserService: LoginUserService) { }

  getUser() {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        this.loginUserService.getFriends(this.user).subscribe(
          prijatelji => {
            this.friends = prijatelji;
          }
        );
      }
    );
  }

  delete(email: string): void {
    this.loginUserService.deleteFriend(this.user, email).subscribe();
    window.location.reload();
  }

  ngOnInit() {
    this.getUser();
  }

}
