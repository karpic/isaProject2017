import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
import { ApplicationDataSharingServiceService } from '../services/application-data-sharing-service.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';


@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
 @Input() bioskopiShow: Bioskopi;
 @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
 updtBioskop: Bioskopi;
 editFlag: boolean;
 bioskopId: string;
 bioskopEdit : Bioskopi;
  bioskopi: Bioskopi[];

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }
 
  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => this.updtBioskop = bioskop
    );
  }
  constructor(private bioskopiService: BioskopiService,
               private location: Location,) { }

  ngOnInit() {
    this.getBioskopi();
    console.log(this.bioskopi);
  }

  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
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


}
