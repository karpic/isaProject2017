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
  constructor(private loginUserService: LoginUserService) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user.zahtevi);
      }
    );
  }
  accept(prihvati: string): void {

  }

  decline(odbij: string): void {

  }
  ngOnInit() {
    this.getUser();
  }


}
