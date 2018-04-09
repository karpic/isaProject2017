import { Location } from '@angular/common';
import { NoviBioskop } from './../../models/novi-bioskop.model';
import { Component, OnInit, Input } from '@angular/core';
import { BioskopiService } from '../../bioskopi.service';
import { NgForm } from '@angular/forms';
import { Bioskopi } from '../../models/bioskopi';


@Component({
  selector: 'app-bioskop-edit',
  templateUrl: './bioskop-edit.component.html',
  styleUrls: ['./bioskop-edit.component.css']
})
export class BioskopEditComponent implements OnInit {
  noviBioskop: NoviBioskop = new NoviBioskop("","","",[], []);
  updtBioskop: Bioskopi;
  editFlag: boolean;
 @Input() bioskopEdit : Bioskopi;
  bioskopi: Bioskopi[];

  onNoviBioskopSubmit(forma: NgForm) {
    this.noviBioskop.naziv = forma.value.naziv;
    this.noviBioskop.adresa = forma.value.adresa;
    this.noviBioskop.opis = forma.value.opis;
    this.noviBioskop.repertoar = [];
    this.noviBioskop.brmesta = [];
    this.bioskopiService.insertBioskop(this.noviBioskop).subscribe();
    forma.reset();
    this.location.back();

  }

  constructor(
    private bioskopiService: BioskopiService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  otvoriBioskopUpdt(bioskop: Bioskopi): void {
    this.updtBioskop = bioskop;
    this.editFlag = true;
    window.scrollTo(0, 0);
  }

  bioskopUpdtSubmit(forma: NgForm){
    this.updtBioskop.naziv = forma.value.naziv;
    this.updtBioskop.naziv = forma.value.adresa;
    this.updtBioskop.naziv = forma.value.opis;
    this.updtBioskop.repertoar = [];
    this.updtBioskop.brmesta =[];
    this.bioskopiService.updateBioskop(this.updtBioskop).subscribe();
    forma.reset();
    this.location.back();
  }
  
  bioskopEdt() {
    this.bioskopiService.updateBioskop(this.bioskopEdit).subscribe();
    this.location.back();
  }

  
  updateBioskop(): void{
    this.bioskopiService.updateBioskop(this.bioskopEdit).subscribe();
  }

  
  deleteBioskop(bioskop: Bioskopi) {
    this.bioskopiService.deleteBioskop(bioskop).subscribe();
    this.bioskopi = this.bioskopi.filter(r => r !== bioskop);
  }
}
