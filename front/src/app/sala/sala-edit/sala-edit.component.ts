import { Component, OnInit } from '@angular/core';
import { NovaSala } from '../../models/nova-sala';
import { Sala } from '../../models/sala';
import { SalaService } from '../../sala.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';


@Component({
  selector: 'app-sala-edit',
  templateUrl: './sala-edit.component.html',
  styleUrls: ['./sala-edit.component.css']
})
export class SalaEditComponent implements OnInit {

  novaSala: NovaSala = new NovaSala(0,0);
  updtSala: Sala;
  editFlag: boolean;
  salaId: string;
  salaEdt :Sala;
  sale: Sala[];


  constructor(private salaService: SalaService,
              private location: Location,
              private route: ActivatedRoute) { }

              
            
        novaSalaSubmit(forma: NgForm) {
                this.novaSala.brmesta = forma.value.brmesta;
                this.novaSala.brSlobodnih = forma.value.brSlobodnih;
                this.salaService.insertSala(this.novaSala).subscribe();
                forma.reset();
                this.location.back();
              }

              
              getSala() {
                this.salaService.getSala(this.salaId).subscribe(
                  (sala) => this.salaEdt = sala
                );
              } 

              salaEdit() {
                this.salaService.updateSala(this.salaEdt).subscribe();
                this.location.back();
              }

             

            
  ngOnInit() {
    if(this.route.snapshot.params['salaId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.salaId = params["salaId"];
        }
      );
      this.getSala();
    }  

  }


}
