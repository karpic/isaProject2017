import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Pozorista } from '../../models/pozorista';
import { PozoristeService } from '../../services/pozorista.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pozorista-edit',
  templateUrl: './pozorista-edit.component.html',
  styleUrls: ['./pozorista-edit.component.css']
})
export class PozoristaEditComponent implements OnInit {
  @Input() pozoristaShow: Pozorista
  @Output() pozoristeSelect: EventEmitter<any> = new EventEmitter<void>();
  updtPozoriste: Pozorista;
  editFlag: boolean;
  pozoristeId: string;
  pozoristeEdit : Pozorista;
  pozorista: Pozorista[];

  constructor(private pozoristaService: PozoristeService,
    private location: Location,
    private route: ActivatedRoute) { }

  
    getPozorista(): void {
      this.pozoristaService.getPozorista()
        .subscribe(pozorista => this.pozorista = pozorista);
    }
   
    getPozoriste() {
      this.pozoristaService.getPozoriste(this.pozoristeId).subscribe(
        (bioskop) => this.updtPozoriste = bioskop
      );
    }

  ngOnInit() {
    if(this.route.snapshot.params['pozoristeId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.pozoristeId = params["pozoristeId"];
        }
      );
      this.getPozoriste();
    
  }
}

onSelected() {
  this.pozoristeSelect.emit();
}

selectedPozoriste(pozoriste: Pozorista) {
  this.pozoristeSelect.emit(pozoriste);
}


  otvoriPozoristeUpdt(pozoriste: Pozorista): void {
    this.updtPozoriste = pozoriste;
    this.editFlag = true;
    window.scrollTo(0, 0);
  }

  pozoristeUpdtSubmit(forma: NgForm){
    this.updtPozoriste.naziv = forma.value.naziv;
    this.updtPozoriste.naziv = forma.value.adresa;
    this.updtPozoriste.naziv = forma.value.opis;
    this.updtPozoriste.repertoar = [];
    this.updtPozoriste.brmesta =[];
    this.pozoristaService.updatePozoriste(this.updtPozoriste).subscribe();
    forma.reset();
    this.location.back();
  }
  
  pozoristeEdt() {
    this.pozoristaService.updatePozoriste(this.pozoristeEdit).subscribe();
    this.location.back();
  }

  
  updatePoozoriste(): void{
    this.pozoristaService.updatePozoriste(this.pozoristeEdit).subscribe();
  }

}
