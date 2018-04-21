import { Filmovi } from './../../models/filmovi';
import { PozoristeService } from './../../services/pozorista.service';
import { Pozorista } from './../../models/pozorista';
import { Bioskopi } from './../../models/bioskopi';
import { BioskopiService } from './../../bioskopi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rezervacija2',
  templateUrl: './rezervacija2.component.html',
  styleUrls: ['./rezervacija2.component.css']
})
export class Rezervacija2Component implements OnInit {

  bioskopId: string;
  selectedMovie: string;
  selectedShow: string;
  bioskopBool: boolean;
  pozoristeBool: boolean;
  pozoristeId: string;
  bioskop: Bioskopi;
  pozoriste: Pozorista;
  filmovi: Filmovi[];

  constructor(private route: ActivatedRoute, private bioskopiService: BioskopiService, private pozoristeService: PozoristeService) { }

  ngOnInit() {
    if (this.route.snapshot.url[1].path === 'bioskop') {
      this.route.params.subscribe(
        (params: Params) => {
          this.bioskopId = params['bioskopId'];
        }
      );
      this.bioskopBool = true;
      this.pozoristeBool = false;
      this.getBioskop();
      this.getFilmovi();

    }
    if (this.route.snapshot.url[1].path === 'pozoriste') {
      this.route.params.subscribe(
        (params: Params) => {
          this.pozoristeId = params['pozoristeId'];
        }
      );
      this.bioskopBool = false;
      this.pozoristeBool = true;
      this.getPozoriste();
    }
  }

  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => {
        this.bioskop = bioskop;
      }
    );
  }

  getFilmovi() {

  }

  getPozoriste() {
    this.pozoristeService.getPozoriste(this.pozoristeId).subscribe(
      (pozoriste) => this.pozoriste = pozoriste
    );
  }

}
