import { CommonModule } from '@angular/common';
import { LoggedInUser } from './../models/logged-in-user';
import { LoginUserService } from './../login/login-user.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

@NgModule({
  imports: [CommonModule]
})


export class UserComponent implements OnInit {
  @Input() userShow: LoggedInUser;
  @Input() completedParam;

  user: LoggedInUser;
  isAdmin: boolean;
  ime = '';
  prezime = '';
  pretrazeniKorisnici: LoggedInUser[];

  constructor(private loginUserService: LoginUserService) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        console.log(this.user.roles);
        if (this.user.roles.includes('ROLE_ADMIN')) {
          this.isAdmin = true;
        }
      }
    );

  }

  findUser(): void {
    this.loginUserService.getUserByname(this.ime, this.prezime).subscribe(
      data => this.pretrazeniKorisnici = data
    );
  }

  addFriend(email: string): void {
    this.loginUserService.addFriend(this.user, email).subscribe();
  }

  ngOnInit() {
    this.getUser();
  }

}
