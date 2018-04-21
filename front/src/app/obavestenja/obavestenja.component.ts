import { ObavestenjaService } from './../services/obavestenja.service';
import { Component, OnInit } from '@angular/core';
import { Obavestenje } from '../models/obavestenje.model';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {
  tokenPayload;
  username: String;
  obavestenja: Obavestenje[];

  getObavestenja() {
    this.obavestenjaService.getObavestenja().subscribe(
      (obavestenja) => this.obavestenja = obavestenja
    );
  }


  constructor(
    private obavestenjaService: ObavestenjaService
  ) { }

  ngOnInit() {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    this.username = this.tokenPayload.sub;
    this.getObavestenja();
  }

}
