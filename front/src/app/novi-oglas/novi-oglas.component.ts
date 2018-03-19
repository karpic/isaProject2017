import { Oglas } from './../models/oglas';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../models/oglas';
import { OglasService } from '../oglas.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-novi-oglas',
  templateUrl: './novi-oglas.component.html',
  styleUrls: ['./novi-oglas.component.css']
})
export class NoviOglasComponent implements OnInit {
  @Input() oglasToEdit: Oglas;



  insertOglas(naziv: String, opis: String, datum: Date): void{
    var oglas = {
      "naziv":  naziv,
      "opis": opis,
      "datum": datum,
      "odobren": false,
      "ownerUserName": "Arsenije"
    }

    this.oglasService.insertOglas(oglas as Oglas).subscribe();
    this.goBack();
  }

  updateOglas(datum: Date): void{
    this.oglasToEdit.datum = datum;
    this.oglasService.updateOglas(this.oglasToEdit).subscribe();

  }

  goBack(): void {
    this.location.back();
  }
  constructor(
    private location: Location,
    private oglasService: OglasService
  ) {

  }

  ngOnInit() {

  }

}
