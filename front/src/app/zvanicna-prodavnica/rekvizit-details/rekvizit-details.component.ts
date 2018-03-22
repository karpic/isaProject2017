import { RekvizitService } from './../../rekvizit.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';

@Component({
  selector: 'app-rekvizit-details',
  templateUrl: './rekvizit-details.component.html',
  styleUrls: ['./rekvizit-details.component.css']
})
export class RekvizitDetailsComponent implements OnInit {
  @Input() rekvizitToDisplay: Rekvizit;
  @ViewChild('rezervisiBtn') rezervisiBtn: ElementRef;
  constructor(private rekvizitiService: RekvizitService) { }

  ngOnInit() {
  }

  onRezervisiClick() {
    this.rekvizitToDisplay.rezervisan = true;
    this.rekvizitiService.updateRekvizit(this.rekvizitToDisplay).subscribe();
  }

}
