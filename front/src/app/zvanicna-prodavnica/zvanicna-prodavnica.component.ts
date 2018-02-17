import { RekvizitService } from './../rekvizit.service';
import { Component, OnInit } from '@angular/core';
import { Rekvizit } from '../models/rekvizit';

@Component({
  selector: 'app-zvanicna-prodavnica',
  templateUrl: './zvanicna-prodavnica.component.html',
  styleUrls: ['./zvanicna-prodavnica.component.css']
})
export class ZvanicnaProdavnicaComponent implements OnInit {
  rekviziti: Rekvizit[];

  getRekviziti(): void {
    this.rekvizitService.getRekviziti()
      .subscribe(rekviziti => this.rekviziti = rekviziti);
  }

  constructor(private rekvizitService: RekvizitService) { }

  ngOnInit() {
    this.getRekviziti();
  }

}
