import { NoviOglas } from './../../models/novi-oglas';
import { OglasService } from './../../oglas.service';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Oglas } from '../../models/oglas';

@Component({
  selector: 'app-oglas-edit',
  templateUrl: './oglas-edit.component.html',
  styleUrls: ['./oglas-edit.component.css']
})
export class OglasEditComponent implements OnInit {
  @ViewChild('form') oglasForm: NgForm;
  noviOglas: NoviOglas = new NoviOglas("", "", new Date(), false, "", "", 0, "");
  constructor(private location: Location,
              private oglasiService: OglasService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.noviOglas.naziv = this.oglasForm.value.naziv;
    this.noviOglas.opis = this.oglasForm.value.opis;
    this.noviOglas.datum = this.oglasForm.value.datum;
    this.noviOglas.imgPath = this.oglasForm.value.slika;

    this.oglasiService.insertOglas(this.noviOglas as NoviOglas).subscribe();
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  onResetClick() {
    this.oglasForm.reset();
  }

}
