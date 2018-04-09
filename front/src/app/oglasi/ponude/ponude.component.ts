import { PonudeService } from './../../services/ponude.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Ponuda } from '../../models/ponuda';
import { Oglas } from '../../models/oglas';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-ponude',
  templateUrl: './ponude.component.html',
  styleUrls: ['./ponude.component.css']
})
export class PonudeComponent implements OnInit, OnChanges {
  tokenPayload;
  authenticatedUser: string;
  ponude: Ponuda[];
  @Input() oglas: Oglas;


  getPonudeForOglas(): void {
    this.ponudeService.getPonudeByOglasId(this.oglas.id)
      .subscribe(ponude => this.ponude = ponude);
  }

  izaberi(ponuda: Ponuda) {
    ponuda.izabrana = true;
    this.ponudeService.reserve(ponuda).subscribe();
  }

  constructor(private ponudeService: PonudeService) { }

  ngOnInit() {
    this.getPonudeForOglas();
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    this.authenticatedUser = this.tokenPayload.sub;
  }

  ngOnChanges(): void {
    this.getPonudeForOglas();
  }

}
