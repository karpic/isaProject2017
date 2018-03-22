import { Location } from '@angular/common';
import { RekvizitService } from './../../rekvizit.service';
import { NoviRekvizit } from './../../models/novi-rekvizit';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekvizit-edit',
  templateUrl: './rekvizit-edit.component.html',
  styleUrls: ['./rekvizit-edit.component.css']
})
export class RekvizitEditComponent implements OnInit {
  constructor(
    private rekvizitiService: RekvizitService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onNoviRekvizitSubmit(noviRekForm: NgForm) {
    var noviRekvizit = {
      ime: noviRekForm.value.naziv,
      opis: noviRekForm.value.opis,
      cena: noviRekForm.value.cena,
      rezervisan: false,
      imgLocation: noviRekForm.value.slika
    }
    this.rekvizitiService.insertRekvizit(noviRekvizit as NoviRekvizit).subscribe();
    noviRekForm.reset();
  }

}
