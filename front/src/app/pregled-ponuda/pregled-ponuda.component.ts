import { OglasService } from './../oglas.service';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ponuda } from '../models/ponuda';
import { Oglas } from '../models/oglas';
import { NgForm } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-pregled-ponuda',
  templateUrl: './pregled-ponuda.component.html',
  styleUrls: ['./pregled-ponuda.component.css']
})
export class PregledPonudaComponent implements OnInit {
  tokenPayload;
  username: String;
  ponude: Ponuda[];
  displayedOglas: Oglas;
  editPonudaDisplayed = false;
  selectedPonuda: Ponuda;

  getPonudeForUser() {
    this.ponudeServie.getPonudeByUserName(this.username).subscribe(
      (ponude) => this.ponude = ponude
    );
  }

  onPonudaSelect(ponuda: Ponuda){
    this.oglasiService.getOglas(ponuda.oglasId).subscribe(
      (oglas) => this.displayedOglas = oglas
    );
    this.selectedPonuda = ponuda;
  }

  deletePonuda(ponuda: Ponuda) {
    this.ponudeServie.deletePonuda(ponuda).subscribe();
    this.ponude = this.ponude.filter(p => p !== ponuda);
  }

  onPonudaEdit() {
    this.ponudeServie.updatePonuda(this.selectedPonuda).subscribe();
    this.editPonudaDisplayed = false;
  }

  constructor(
    private route: ActivatedRoute,
    private ponudeServie: PonudeService,
    private oglasiService: OglasService
  ) { }

  ngOnInit() {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    this.username = this.tokenPayload.sub;
    console.log(this.username);
    /* this.route.params.subscribe(
      (params: Params) => {
        this.username = params["username"];
      }
    ) */
    this.getPonudeForUser();
  }

}
