import { Component, OnInit } from '@angular/core';
import { Karta } from '../models/karta';
import { KartaService } from '../karta.service';

@Component({
  selector: 'app-karte',
  templateUrl: './karte.component.html',
  styleUrls: ['./karte.component.css']
})
export class KarteComponent implements OnInit {

  karte: Karta[];
  karta1: Karta;
  kartaId: string;


  constructor(private kartaService: KartaService) { }


  getKarte(): void {
    this.kartaService.getKarte()
      .subscribe(karte => this.karte = karte);
  }
  
    getKarta() {
      this.kartaService.getKarta(this.kartaId).subscribe(
        (karta) => this.karta1 = karta
      );
    }

  ngOnInit() {
    this.getKarte();
  }

}
