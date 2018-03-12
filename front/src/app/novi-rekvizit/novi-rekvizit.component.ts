import { RekvizitService } from './../rekvizit.service';
import { Rekvizit } from './../models/rekvizit';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-novi-rekvizit',
  templateUrl: './novi-rekvizit.component.html',
  styleUrls: ['./novi-rekvizit.component.css']
})
export class NoviRekvizitComponent implements OnInit {
  @Input() rekvizitToEdit: Rekvizit;

  dodajRekvizit(ime: String, opis: String, cena: number, rezervisan: boolean): void {

    this.rekvizitService.insertRekvizit( {ime, opis, cena, rezervisan } as Rekvizit).subscribe();
    this.goBack();

  }

  updateRekvizit() {
    this.rekvizitService.updateRekvizit(this.rekvizitToEdit).subscribe();
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
