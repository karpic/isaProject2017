import { PozoristeService } from './../services/pozorista.service';
import { BioskopiService } from './../bioskopi.service';
import { Bioskopi } from './../models/bioskopi';
import { Component, OnInit } from '@angular/core';
import { Pozorista } from '../models/pozorista';

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

  constructor(private bioskopService: BioskopiService, private pozoristeService: PozoristeService) { }

  ngOnInit() {
    this.bioskopService.getBioskopi().subscribe(
      data => {
        this.bioskopi = data;
      }
    );

    this.pozoristeService.getPozorista().subscribe(
      data => {
        this.pozorista = data;
      }
    );
  }

}
