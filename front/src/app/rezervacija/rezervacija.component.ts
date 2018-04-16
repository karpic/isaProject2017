import { PozoristeService } from './../services/pozorista.service';
import { Pozorista } from './../models/pozorista';
import { BioskopiService } from './../bioskopi.service';
import { Bioskopi } from './../models/bioskopi';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  bioskopi: Bioskopi[];
  pozorista: Pozorista[];
  selectedBioskop: string;
  selectedPozoriste: string;
  constructor(private bioskopiService: BioskopiService, private pozoristeService: PozoristeService) { }

  ngOnInit() {
    this.getBioskopi();
    this.getPozorista();
  }

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }

  getPozorista(): void {
    this.pozoristeService.getPozorista().subscribe(
      pozorista => this.pozorista = pozorista
    );
  }

  izabranBioskop() {

  }

}
