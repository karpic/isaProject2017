import { NoviBioskop } from './../../models/novi-bioskop.model';
import { Component, OnInit } from '@angular/core';
import { BioskopiService } from '../../bioskopi.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bioskop-edit',
  templateUrl: './bioskop-edit.component.html',
  styleUrls: ['./bioskop-edit.component.css']
})
export class BioskopEditComponent implements OnInit {
  noviBioskop: NoviBioskop;

  onNoviBioskopSubmit(forma: NgForm) {
    this.noviBioskop.naziv = forma.value.naziv;
    this.noviBioskop.adresa = forma.value.adresa;
    this.noviBioskop.opis = forma.value.opis;


  }

  constructor(private bioskopiService: BioskopiService) { }

  ngOnInit() {
  }

}
