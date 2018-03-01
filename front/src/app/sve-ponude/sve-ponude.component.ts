import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit, Input } from '@angular/core';
import { Oglas } from '../models/oglas';
import { Ponuda } from '../models/ponuda';


@Component({
  selector: 'app-sve-ponude',
  templateUrl: './sve-ponude.component.html',
  styleUrls: ['./sve-ponude.component.css']
})
export class SvePonudeComponent implements OnInit {
  ponude: Ponuda[];
  oglas: Oglas;

  getPonudeForOglas(): void{
    this.ponudeService.getPonudeByOglasId(this.oglas.id)
      .subscribe(ponude => this.ponude = ponude);
  }

  constructor(
    private applicationDataSharing: ApplicationDataSharingServiceService,
    private ponudeService: PonudeService
  ) { }

  ngOnInit() {
    this.oglas = this.applicationDataSharing.oglas;
    this.getPonudeForOglas();
  }

}
