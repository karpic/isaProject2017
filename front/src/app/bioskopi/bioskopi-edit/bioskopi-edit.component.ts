import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Bioskopi } from '../../models/bioskopi';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';
import { BioskopiService } from '../../bioskopi.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';


@Component({
  selector: 'app-bioskopi-edit',
  templateUrl: './bioskopi-edit.component.html',
  styleUrls: ['./bioskopi-edit.component.css']
})
export class BioskopiEditComponent implements OnInit {
  @Input() bioskopiShow: Bioskopi
  @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();

  editFlag: boolean;
  bioskopId: string;
  bioskopEdit: Bioskopi;
  bioskopi: Bioskopi[];


  constructor(private bioskopiService: BioskopiService,
    private location: Location,
    private route: ActivatedRoute) { }


    getBioskopi(): void {
      this.bioskopiService.getBioskopi()
        .subscribe(bioskopi => this.bioskopi = bioskopi);
    }

    getBioskop() {
      console.log("AAA");
      console.log(this.bioskopId);
      this.bioskopiService.getBioskop(this.bioskopId).subscribe(
        (bioskop) => this.bioskopEdit = bioskop
      );
    }


  ngOnInit() {
    if(this.route.snapshot.params['bioskopId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.bioskopId = params["bioskopId"];
        }
      );
      console.log("getbioskop");
      this.getBioskop();
    }
}
selectedBioskop(bioskop: Bioskopi) {
  this.bioskopSelect.emit(bioskop);
}

onSelected() {
  this.bioskopSelect.emit();
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




}
