import { OglasService } from './../oglas.service';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ponuda } from '../models/ponuda';
import { Oglas } from '../models/oglas';

@Component({
  selector: 'app-pregled-ponuda',
  templateUrl: './pregled-ponuda.component.html',
  styleUrls: ['./pregled-ponuda.component.css']
})
export class PregledPonudaComponent implements OnInit {
  userId: String;
  ponude: Ponuda[];
  displayedOglas: Oglas;

  getPonudeForUser() {
    this.ponudeServie.getPonudeByUserId(this.userId).subscribe(
      (ponude) => this.ponude = ponude
    );
  }

  onPonudaSelect(ponuda: Ponuda){
    this.oglasiService.getOglas(ponuda.oglasId).subscribe(
      (oglas) => this.displayedOglas = oglas
    );
  }

  constructor(
    private route: ActivatedRoute,
    private ponudeServie: PonudeService,
    private oglasiService: OglasService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = params["userId"];
      }
    )
    this.getPonudeForUser();
  }

}
