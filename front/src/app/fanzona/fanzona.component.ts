import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-fanzona',
  templateUrl: './fanzona.component.html',
  styleUrls: ['./fanzona.component.css']
})
export class FanzonaComponent implements OnInit {
  isAdmin: boolean;
  tokenPayload;

  constructor() { }

  ngOnInit() {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    if (this.tokenPayload.scopes[0].authority === "ROLE_ADMIN") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    console.log(this.isAdmin);
  }

}
