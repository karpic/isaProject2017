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

  deleteRekvizit(rekvizit: Rekvizit): void {
    this.rekviziti = this.rekviziti.filter(r => r !== rekvizit);
    this.rekvizitService.deleteRekvizit(rekvizit).subscribe();
  }

  updateRekvizitRezervisi(rekvizit: Rekvizit): void{
    rekvizit.rezervisan = true;
    this.rekvizitService.updateRekvizit(rekvizit).subscribe();
  }

  constructor(private rekvizitService: RekvizitService) { }

  ngOnInit() {
    this.getRekviziti();
  }

}
