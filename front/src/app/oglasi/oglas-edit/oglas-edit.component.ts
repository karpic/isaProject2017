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

  constructor(private location: Location,
              private oglasiService: OglasService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var oglasToSubmit: {
      naziv: '',
      opis: '',
      datum: '',
      odobren: false,
      ownerUsername: 'tempUsername',
      imgPath: ''
    };

    oglasToSubmit.naziv = this.oglasForm.value.naziv;
    oglasToSubmit.opis = this.oglasForm.value.opis;
    oglasToSubmit.datum = this.oglasForm.value.datum;
    oglasToSubmit.imgPath = this.oglasForm.value.slika;
    /* this.oglasiService.insertOglas(oglasToSubmit as Oglas).subscribe(); */
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  onResetClick() {
    this.oglasForm.reset();
  }

}
