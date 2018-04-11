import { OglasService } from './../../oglas.service';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../../models/oglas';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-recenzija',
  templateUrl: './recenzija.component.html',
  styleUrls: ['./recenzija.component.css']
})
export class RecenzijaComponent implements OnInit {
  oglasiNaRecenziji: Oglas[];
  tokenPayload;

  getOglasiNaRecenziji() {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    this.oglasService.getNaRecenziji(this.tokenPayload.sub).subscribe(
      (oglasi) => this.oglasiNaRecenziji = oglasi
    );
  }

  odobriOglas(oglas: Oglas) {
    oglas.status = 2;
    this.oglasService.updateOglas(oglas).subscribe();
    this.oglasiNaRecenziji = this.oglasiNaRecenziji.filter(o => o !== oglas);
  }

  odbijOglas(oglas: Oglas) {
    this.oglasService.deleteOglas(oglas).subscribe();
    this.oglasiNaRecenziji = this.oglasiNaRecenziji.filter(o => o !== oglas);
  }

  constructor(
    private oglasService: OglasService
  ) { }

  ngOnInit() {
    this.getOglasiNaRecenziji();
  }

}
