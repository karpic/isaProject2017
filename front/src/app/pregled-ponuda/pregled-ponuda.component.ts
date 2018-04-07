import { OglasService } from './../oglas.service';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ponuda } from '../models/ponuda';
import { Oglas } from '../models/oglas';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pregled-ponuda',
  templateUrl: './pregled-ponuda.component.html',
  styleUrls: ['./pregled-ponuda.component.css']
})
export class PregledPonudaComponent implements OnInit {
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
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params["username"];
      }
    )
    this.getPonudeForUser();
  }

}
