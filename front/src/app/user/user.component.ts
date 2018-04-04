import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));

  constructor() { }

  ngOnInit() {
  }

}
