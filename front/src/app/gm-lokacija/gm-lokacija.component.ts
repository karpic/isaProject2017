import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { GeocoderService } from './../services/geocoder.service';
import { Bioskopi } from './../models/bioskopi';
import { BioskopiService } from './../bioskopi.service';
import { PozoristeService } from './../services/pozorista.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { Pozorista } from '../models/pozorista';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-gm-lokacija',
  templateUrl: './gm-lokacija.component.html',
  styleUrls: ['./gm-lokacija.component.css']
})
export class GmLokacijaComponent implements OnInit {
  lat: number = 51.673858;
  lon: number = 7.815982;
  adresa: string;
  constructor(
    private route: ActivatedRoute,
    private appDataSharing: ApplicationDataSharingServiceService,
    private geocoderService: GeocoderService,
    private _loader: MapsAPILoader,
    private _zone: NgZone
  ) { }

  getLatLonForAdress() {
    this.geocoderService.getGeocoding(this.adresa)
            .subscribe(
            result => {
                // needs to run inside zone to update the map
                this._zone.run(() => {
                    this.lat = result.lat();
                    this.lon = result.lng();
                });
            },
            error => console.log(error),
            () => console.log('Geocoding completed!')
            );
  }

  ngOnInit() {
    this.adresa = this.appDataSharing.adresa;
    console.log(this.adresa);
    /* this.route.params.subscribe(
      (params: Params) => {
        this.adresa = params["adresa"];
        console.log(this.adresa)
      }
    ); */
    this.getLatLonForAdress();
  }

}
