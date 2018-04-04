import { RekvizitService } from './../rekvizit.service';
import { Component, OnInit } from '@angular/core';
import { Rekvizit } from '../models/rekvizit';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';


@Component({
  selector: 'app-zvanicna-prodavnica',
  templateUrl: './zvanicna-prodavnica.component.html',
  styleUrls: ['./zvanicna-prodavnica.component.css']
})
export class ZvanicnaProdavnicaComponent implements OnInit {
  selectedRekvizit: Rekvizit;
  rekvizitToEdit: Rekvizit;
  editFlag: boolean;
  tokenPayload: string;

  updateRekvizitRezervisi(rekvizit: Rekvizit): void {
    rekvizit.rezervisan = true;
    this.rekvizitService.updateRekvizit(rekvizit).subscribe();
  }

  otvoriRekvizitUEditMode(rekvizit: Rekvizit): void {
    this.rekvizitToEdit = rekvizit;
    this.editFlag = true;
    window.scrollTo(0, 0);
  }

  logToken() {
    this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
    console.log(this.tokenPayload);
  }

  constructor(private rekvizitService: RekvizitService) { }

  ngOnInit() {
    this.logToken();
  }

}
