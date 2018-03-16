import { Oglas } from './../../models/oglas';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oglas-details',
  templateUrl: './oglas-details.component.html',
  styleUrls: ['./oglas-details.component.css']
})
export class OglasDetailsComponent implements OnInit {
  @Input() oglasToDisplay: Oglas;
  constructor() { }

  ngOnInit() {
  }

}
