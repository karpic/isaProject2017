import { Component, OnInit } from '@angular/core';
import { KartaService } from '../../karta.service';
import { Location } from '@angular/common';
import { NovaKarta } from '../../models/nova-karta';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Karta } from '../../models/karta';

@Component({
  selector: 'app-karta-edit',
  templateUrl: './karta-edit.component.html',
  styleUrls: ['./karta-edit.component.css']
})
export class KartaEditComponent implements OnInit {
novaKarta: NovaKarta = new NovaKarta("","","","","","","");
bioskopId: string;
kartaId: string;
kartaEdit: Karta;

  constructor(private kartaService: KartaService,
              private location: Location) { }



              novaKartaSubmit(forma: NgForm) {
                this.novaKarta.projPred = forma.value.projPred;
                this.novaKarta.datum = forma.value.datum;
                this.novaKarta.vreme = forma.value.vreme;
                this.novaKarta.sala = forma.value.sala;
                this.novaKarta.brsedista = forma.value.brsedista;
                this.novaKarta.originalCena = forma.value.originalCena;
                this.novaKarta.popustCena = forma.value.popustCena;
              
                this.kartaService.insertKarta(this.novaKarta).subscribe();
                forma.reset();
                this.location.back();
              }
            
              getKarta() {
                this.kartaService.getKarta(this.kartaId).subscribe(
                  (karta) => this.kartaEdit = karta
                );
              }
            
  ngOnInit() {
  
  }

}
