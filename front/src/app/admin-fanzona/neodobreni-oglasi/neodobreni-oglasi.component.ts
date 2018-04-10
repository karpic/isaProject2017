import { OglasService } from './../../oglas.service';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../../models/oglas';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-neodobreni-oglasi',
  templateUrl: './neodobreni-oglasi.component.html',
  styleUrls: ['./neodobreni-oglasi.component.css']
})
export class NeodobreniOglasiComponent implements OnInit {
  neodobreniOglasi: Oglas[];
  tokenPayload;

  getNeodobreniOglasi() {
    this.oglasiService.getNeodobreni().subscribe(
      (neodobreniOglasi) => this.neodobreniOglasi = neodobreniOglasi
    );
  }

  preuzmiOglas(oglas: Oglas) {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    oglas.status = 1;
    oglas.adminRec = this.tokenPayload.sub;
    this.oglasiService.updateOglas(oglas).subscribe();
    this.neodobreniOglasi = this.neodobreniOglasi.filter(o => o !== oglas);
  }

  constructor(private oglasiService: OglasService) { }

  ngOnInit() {
    this.getNeodobreniOglasi();
  }

}
