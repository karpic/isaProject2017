import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  getRekviziti(): void {
    this.rekvizitService.getRekviziti()
      .subscribe(rekviziti => this.rekviziti = rekviziti);
  }

  constructor(private rekvizitService: RekvizitService) { }

  ngOnInit() {
    this.getRekviziti();
  }

  onRekvizitSelected(rekvizit: Rekvizit) {
    this.rekvizitWasSelected.emit(rekvizit);
  }

}
