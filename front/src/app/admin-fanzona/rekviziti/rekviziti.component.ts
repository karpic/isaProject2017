import { RekvizitService } from './../../rekvizit.service';
import { Component, OnInit } from '@angular/core';
import { Rekvizit } from '../../models/rekvizit';

@Component({
  selector: 'app-rekviziti',
  templateUrl: './rekviziti.component.html',
  styleUrls: ['./rekviziti.component.css']
})
export class RekvizitiComponent implements OnInit {
  rekviziti: Rekvizit[];

  getRekviziti(): void {
    this.rekvizitiService.getRekviziti()
      .subscribe(rekviziti => this.rekviziti = rekviziti);
  }

  deleteRekvizit(rekvizit: Rekvizit) {
    this.rekvizitiService.deleteRekvizit(rekvizit).subscribe();
    this.rekviziti = this.rekviziti.filter(r => r !== rekvizit);
  }

  constructor(
    private rekvizitiService: RekvizitService

  ) { }

  ngOnInit() {
    this.getRekviziti();
    console.log(this.rekviziti);
  }

}
