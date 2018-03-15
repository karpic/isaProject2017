import { Rekvizit } from './../../../models/rekvizit';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rekvizit-item',
  templateUrl: './rekvizit-item.component.html',
  styleUrls: ['./rekvizit-item.component.css']
})
export class RekvizitItemComponent implements OnInit {
  @Input() rekvizitItem: Rekvizit;
  @Output() rekvizitSelected: EventEmitter<any> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.rekvizitSelected.emit();
  }


}
