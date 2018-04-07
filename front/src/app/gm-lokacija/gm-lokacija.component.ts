import { GeocoderService } from './../services/geocoder.service';
import { Bioskopi } from './../models/bioskopi';
import { BioskopiService } from './../bioskopi.service';
import { PozoristeService } from './../services/pozorista.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pozorista } from '../models/pozorista';

@Component({
  selector: 'app-gm-lokacija',
  templateUrl: './gm-lokacija.component.html',
  styleUrls: ['./gm-lokacija.component.css']
})
export class GmLokacijaComponent implements OnInit {
  bioskopFlag: boolean;
  pozoristeFlag: boolean;
  pozoriste: Pozorista;
  bioskop: Bioskopi
  targetId: string;
  adresa: string = "Novi Sad Bulevar Oslobodjenja";
  latLondata: any;

  constructor(
    private route: ActivatedRoute,
    private pozoristeService: PozoristeService,
    private bioskopService: BioskopiService,
    private geocoderService: GeocoderService
  ) { }

  getBioskop() {
    this.bioskopService.getBioskop(this.targetId).subscribe(
      (bioskop) => this.bioskop = bioskop
    );
  }

  getPozoriste() {
    this.pozoristeService.getPozoriste(this.targetId).subscribe(
      (pozoriste) => this.pozoriste = pozoriste
    );
  }

  getLatLon(adresa: string) {
    this.geocoderService.getLonLatFromAddres(adresa).subscribe(
      (data) => this.latLondata = data
    );
    console.log(this.latLondata);
  }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.targetId = params["id"]
        }
      );
      this.getLatLon(this.adresa);
      //this.getPozoriste();
      //this.getBioskop();

  }

}
