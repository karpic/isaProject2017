import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../login/login-user.service';
import { LoggedInUser } from '../../models/logged-in-user';

@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {

  user: LoggedInUser;
  requests: LoggedInUser[];
  constructor(private loginUserService: LoginUserService) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;

      }
    );
  }

  getRequests(): void {
    this.loginUserService.getRequests(this.user).subscribe(
      data => {
        this.requests = data;
      }
    );
  }

  accept(email: string): void {
    this.loginUserService.acceptFriend(this.user, email).subscribe();
    window.location.reload();
  }

  decline(email: string): void {
    this.loginUserService.declineFriend(this.user, email).subscribe();
    window.location.reload();
  }

  ngOnInit() {
    this.getUser();
    this.getRequests();
  }


}
