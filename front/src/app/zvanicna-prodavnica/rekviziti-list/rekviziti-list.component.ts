import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';
import { RekvizitService } from '../../rekvizit.service';


@Component({
  selector: 'app-rekviziti-list',
  templateUrl: './rekviziti-list.component.html',
  styleUrls: ['./rekviziti-list.component.css']
})
export class RekvizitiListComponent implements OnInit {
  @Output() rekvizitWasSelected: EventEmitter<any> = new EventEmitter<Rekvizit>();
  rekviziti: Rekvizit[];
  constructor(private rekvizitService: RekvizitService) { }

  getRekviziti(): void {
    this.rekvizitService.getRekviziti()
      .subscribe(rekviziti => this.rekviziti = rekviziti);
  }

  ngOnInit() {
    this.getRekviziti();
  }

  onRekvizitSelected(rekvizit: Rekvizit) {
    this.rekvizitWasSelected.emit(rekvizit);
  }

}
