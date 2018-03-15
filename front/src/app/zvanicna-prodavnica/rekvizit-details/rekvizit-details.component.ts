import { Component, OnInit, Input } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';

@Component({
  selector: 'app-rekvizit-details',
  templateUrl: './rekvizit-details.component.html',
  styleUrls: ['./rekvizit-details.component.css']
})
export class RekvizitDetailsComponent implements OnInit {
  @Input() rekvizitToDisplay: Rekvizit;

  constructor() { }

  ngOnInit() {
  }

}
