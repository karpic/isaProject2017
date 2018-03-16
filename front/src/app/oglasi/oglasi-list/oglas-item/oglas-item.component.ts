import { Oglas } from './../../../models/oglas';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oglas-item',
  templateUrl: './oglas-item.component.html',
  styleUrls: ['./oglas-item.component.css']
})
export class OglasItemComponent implements OnInit {
  @Input() oglasItem: Oglas;
  @Output() oglasSelected: EventEmitter<any> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.oglasSelected.emit();
  }

}
