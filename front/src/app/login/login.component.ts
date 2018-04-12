import { CheckLoginService } from './../nav-component/check-login.service';
import { LoggedInUser } from './../models/logged-in-user';
import { LoginUserService } from './login-user.service';
import { TokenStorage } from './core/token.storage';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage,
    private loginUserService: LoginUserService, private checkLoginService: CheckLoginService) { }

  username: string;
  password: string;
  user: LoggedInUser;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['user']);
        this.checkLoginService.toggle();
      }
    );
  }


}
