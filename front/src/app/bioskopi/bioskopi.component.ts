import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
import { ApplicationDataSharingServiceService } from '../services/application-data-sharing-service.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
 @Input() bioskopiShow: Bioskopi;
 @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();

 editFlag: boolean;
 bioskopId: string;
 bioskopEdit : Bioskopi;
 bioskopi: Bioskopi[];
 selectBioskop: Bioskopi;


 getBioskopi(): void {
  this.bioskopiService.getBioskopi()
    .subscribe(bioskopi => this.bioskopi = bioskopi);
}

  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => this.bioskopEdit = bioskop
    );
  }

  constructor(private bioskopiService: BioskopiService,
               private location: Location,
               private route: ActivatedRoute,
               private appDataSharing: ApplicationDataSharingServiceService,
               private router: Router
              ) { }

  ngOnInit() {
    
  this.getBioskopi();
  console.log(this.bioskopi);
}

  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
  }
  
  onSelected() {
    this.bioskopSelect.emit();
  }

  otvoriBioskopUpdt(bioskop: Bioskopi): void {
    this.bioskopEdit = bioskop;
    this.editFlag = true;
    window.scrollTo(0, 0);
  }

  bioskopUpdtSubmit(forma: NgForm){
    this.bioskopEdit.naziv = forma.value.naziv;
    this.bioskopEdit.naziv = forma.value.adresa;
    this.bioskopEdit.naziv = forma.value.opis;
    this.bioskopEdit.repertoar = [];
    this.bioskopEdit.brmesta =[];
    this.bioskopiService.updateBioskop(this.bioskopEdit).subscribe();
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

  showOnMap(bioskop: Bioskopi) {
    this.appDataSharing.adresa = bioskop.adresa;
    this.router.navigate(['gmlokacija']);
  }

}
