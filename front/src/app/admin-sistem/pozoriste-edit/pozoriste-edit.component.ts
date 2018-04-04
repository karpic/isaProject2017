import { Location } from '@angular/common';
import { PozoristeService } from './../../services/pozorista.service';
import { NovoPozoriste } from './../../models/novo-pozoriste.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pozoriste-edit',
  templateUrl: './pozoriste-edit.component.html',
  styleUrls: ['./pozoriste-edit.component.css']
})
export class PozoristeEditComponent implements OnInit {
  novoPozoriste: NovoPozoriste = new NovoPozoriste("","","",[],[]);

  onNovoPozoristeSubmit(forma: NgForm){
    this.novoPozoriste.naziv = forma.value.naziv;
    this.novoPozoriste.adresa = forma.value.adresa;
    this.novoPozoriste.opis = forma.value.opis;
    this.novoPozoriste.brmesta = [];
    this.novoPozoriste.repertoar = [];
    this.pozoristaService.insertPozoriste(this.novoPozoriste).subscribe();
    forma.reset();
    this.location.back();
  }

  constructor(
    private pozoristaService: PozoristeService,
    private location: Location
  ) { }

  ngOnInit() {
  }

}