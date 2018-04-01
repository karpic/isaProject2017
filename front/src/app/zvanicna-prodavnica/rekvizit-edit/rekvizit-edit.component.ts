import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RekvizitService } from './../../rekvizit.service';
import { NoviRekvizit } from './../../models/novi-rekvizit';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';

@Component({
  selector: 'app-rekvizit-edit',
  templateUrl: './rekvizit-edit.component.html',
  styleUrls: ['./rekvizit-edit.component.css']
})
export class RekvizitEditComponent implements OnInit {
  rekvizitId: string;
  rekvizitToEdit: Rekvizit;

  constructor(
    private rekvizitiService: RekvizitService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['rekvizitId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.rekvizitId = params["rekvizitId"];
        }
      );
      this.getRekvizit();
    }
  }

  getRekvizit() {
    this.rekvizitiService.getRekvizit(this.rekvizitId).subscribe(
      (rekvizit) => this.rekvizitToEdit = rekvizit
    );
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

  onEidtRekvizitSubmit() {
    this.rekvizitiService.updateRekvizit(this.rekvizitToEdit).subscribe();
    this.location.back();
  }

}
