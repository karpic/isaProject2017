import { Location } from '@angular/common';
import { PozoristeService } from './../../services/pozorista.service';
import { NovoPozoriste } from './../../models/novo-pozoriste.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input} from '@angular/core';
import { Pozorista } from '../../models/pozorista';

@Component({
  selector: 'app-pozoriste-edit',
  templateUrl: './pozoriste-edit.component.html',
  styleUrls: ['./pozoriste-edit.component.css']
})
export class PozoristeEditComponent implements OnInit {
  novoPozoriste: NovoPozoriste = new NovoPozoriste("","","",[],[]);
  updtPozoriste: Pozorista =  new Pozorista("","","","",[],[]);

  @Input() pozoristeEdit: Pozorista;
  pozorista: Pozorista[];

  onNovoPozoristeSubmit(forma: NgForm){
    this.novoPozoriste.naziv = forma.value.naziv;
    this.novoPozoriste.adresa = forma.value.adresa;
    this.novoPozoriste.opis = forma.value.opis;
    this.novoPozoriste.brmesta = [];
    this.novoPozoriste.repertoar = [];
    this.pozoristaService.insertPozoriste(this.novoPozoriste).subscribe();
    forma.reset();
    this.location.back();
  }

  constructor(
    private pozoristaService: PozoristeService,
    private location: Location
  ) { }

  ngOnInit() {
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

  updatePozoriste(): void{
    this.pozoristaService.updatePozoriste(this.pozoristeEdit).subscribe();
  }

  deletePozoriste(pozoriste: Pozorista) {
    this.pozoristaService.deleteBioskop(pozoriste).subscribe();
    this.pozorista = this.pozorista.filter(r => r !== pozoriste);
  }

}
