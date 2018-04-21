import { Component, OnInit } from '@angular/core';
import { NovaPredstava } from '../../models/nova-predstava';
import { Predstave } from '../../models/predstave';
import { PredstaveService } from '../../predstave.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Pozorista } from '../../models/pozorista';
import { PozoristeService } from '../../services/pozorista.service';

@Component({
  selector: 'app-predstave-edit',
  templateUrl: './predstave-edit.component.html',
  styleUrls: ['./predstave-edit.component.css']
})
export class PredstaveEditComponent implements OnInit {

  novaPredstava: NovaPredstava = new NovaPredstava("","","","","","","","","","",0);
  updtPredstava: Predstave;
  editFlag: boolean;
  predstavaId: string;
  predstavaEdt : Predstave;
  predstave: Predstave[];
  pozoristeId: string;

  constructor(private predstaveService: PredstaveService,
              private pozoristeService: PozoristeService,
              private location: Location,
              private route: ActivatedRoute) { }

              
            
        novaPredstavaSubmit(forma: NgForm) {
                this.novaPredstava.naziv = forma.value.naziv;
                this.novaPredstava.glumci = forma.value.glumci;
                this.novaPredstava.zanr = forma.value.zanr;
                this.novaPredstava.reditelj = forma.value.reditelj;
                this.novaPredstava.trajanje = forma.value.trajanje;
                this.novaPredstava.poster = forma.value.poster;
                this.novaPredstava.ocena = forma.value.ocena;
                this.novaPredstava.opis = forma.value.opis;
                this.novaPredstava.sala = forma.value.sala;
                this.novaPredstava.termin = forma.value.termin;   
                this.novaPredstava.cena = forma.value.cena;            
                this.predstaveService.insertPredstava(this.novaPredstava,this.pozoristeId).subscribe();
                forma.reset();
                this.location.back();
              }

              
              getPredstava() {
                this.predstaveService.getPredstava(this.predstavaId).subscribe(
                  (predstava) => this.predstavaEdt = predstava
                );
              }
              
              predstavaEdit() {
                this.predstaveService.updatePredstava(this.predstavaEdt).subscribe();
                this.location.back();
              }


  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'predstave') {
      this.route.params.subscribe(
        (params: Params) => {
          this.predstavaId = params['predstavaId'];
        }
      );
      this.getPredstava();
    } else if (this.route.snapshot.url[0].path === 'predstave-edit') {
      this.route.params.subscribe(
        (params: Params) => {
          this.pozoristeId = params['pozoristeId'];
        }
      );
    }

  }

}
