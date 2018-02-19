import { RekvizitService } from './../rekvizit.service';
import { Rekvizit } from './../models/rekvizit';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-novi-rekvizit',
  templateUrl: './novi-rekvizit.component.html',
  styleUrls: ['./novi-rekvizit.component.css']
})
export class NoviRekvizitComponent implements OnInit {

  dodajRekvizit(ime: String, opis: String): void{

    this.rekvizitService.insertRekvizit( {ime, opis} as Rekvizit).subscribe();
    this.goBack();

  }

  goBack(): void {
    this.location.back();
  }
  constructor(
    private rekvizitService: RekvizitService,
    private location: Location
  ) {

   }

  ngOnInit() {

  }

}
