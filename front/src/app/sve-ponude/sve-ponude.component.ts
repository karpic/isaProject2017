import { Ponuda } from './../models/ponuda';
import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit, Input } from '@angular/core';
import { Oglas } from '../models/oglas';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sve-ponude',
  templateUrl: './sve-ponude.component.html',
  styleUrls: ['./sve-ponude.component.css']
})
export class SvePonudeComponent implements OnInit {
  ponude: Ponuda[];
  oglas: Oglas;
  editFlag: boolean;
  ponudaToEdit: Ponuda;

  getPonudeForOglas(): void{
    this.ponudeService.getPonudeByOglasId(this.oglas.id)
      .subscribe(ponude => this.ponude = ponude);
  }

  goBack(): void{
    this.location.back();
  }

  otvoriPonudaUEditMode(ponuda: Ponuda): void{
    this.ponudaToEdit = ponuda;
    this.editFlag = true;
    window.scrollTo(0,0);
  }

  deletePonuda(ponuda: Ponuda){
    this.ponude = this.ponude.filter(p => p !== ponuda);
    this.ponudeService.deletePonuda(ponuda).subscribe();
  }

  constructor(
    private applicationDataSharing: ApplicationDataSharingServiceService,
    private ponudeService: PonudeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.oglas = this.applicationDataSharing.oglas;
    this.getPonudeForOglas();
  }

}
