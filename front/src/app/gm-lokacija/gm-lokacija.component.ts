import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { GeocoderService } from './../services/geocoder.service';
import { Bioskopi } from './../models/bioskopi';
import { BioskopiService } from './../bioskopi.service';
import { PozoristeService } from './../services/pozorista.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { Pozorista } from '../models/pozorista';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-gm-lokacija',
  templateUrl: './gm-lokacija.component.html',
  styleUrls: ['./gm-lokacija.component.css']
})
export class GmLokacijaComponent implements OnInit {
  adresa: string = "Novi Sad Bulevar Oslobodjenja";
  latLondata: any;
  lat: number = 51.673858;
  lon: number = 7.815982;
  constructor(
    private route: ActivatedRoute,
    private appDataSharing: ApplicationDataSharingServiceService,
    private geocoderService: GeocoderService
  ) { }


  /* getLatLon(adresa: string) {
    this.geocoderService.getGeoLocation(adresa).subscribe(
      (data) => console.log(data)
    );
  } */

  ngOnInit() {
      //this.getLatLon(this.appDataSharing.adresa);
  }

}
