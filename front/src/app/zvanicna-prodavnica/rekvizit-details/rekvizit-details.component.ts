import { RekvizitService } from './../../rekvizit.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-rekvizit-details',
  templateUrl: './rekvizit-details.component.html',
  styleUrls: ['./rekvizit-details.component.css']
})
export class RekvizitDetailsComponent implements OnInit {
  @Input() rekvizitToDisplay: Rekvizit;
  @ViewChild('rezervisiBtn') rezervisiBtn: ElementRef;
  tokenPayload;
  constructor(private rekvizitiService: RekvizitService) { }

  ngOnInit() {
  }

  onRezervisiClick() {
    this.tokenPayload = sessionStorage.getItem(TOKEN_KEY);
    this.rekvizitToDisplay.rezervisan = true;
    this.rekvizitToDisplay.rezervisao = this.tokenPayload.sub;
    this.rekvizitiService.updateRekvizit(this.rekvizitToDisplay).subscribe();
  }

}
