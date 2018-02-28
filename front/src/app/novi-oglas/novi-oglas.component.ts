import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../models/oglas';
import { OglasService } from '../oglas.service';

@Component({
  selector: 'app-novi-oglas',
  templateUrl: './novi-oglas.component.html',
  styleUrls: ['./novi-oglas.component.css']
})
export class NoviOglasComponent implements OnInit {
  tempOglas: Oglas;

  insertOglas(): void{
    this.oglasService.insertOglas(this.tempOglas).subscribe();
    this.goBack();
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
