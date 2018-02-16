import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zvanicna-prodavnica',
  templateUrl: './zvanicna-prodavnica.component.html',
  styleUrls: ['./zvanicna-prodavnica.component.css']
})
export class ZvanicnaProdavnicaComponent implements OnInit {
  rekviziti = [
    { ime: "Rekvizit 1", opis: "Ovo je neki rekvizit 1"},
    { ime: "Rekvizit 2", opis: "Ovo je neki rekvizit 1"},
    { ime: "Rekvizit 3", opis: "Ovo je neki rekvizit 1"},
    { ime: "Rekvizit 4", opis: "Ovo je neki rekvizit 1"}
  ]


  constructor() { }

  ngOnInit() {
  }

}
