import { Component, OnInit, Input} from '@angular/core';
import { Predstave } from '../models/predstave';
import { PredstaveService } from '../predstave.service';
import { PozoristeService } from '../services/pozorista.service';
import { ActivatedRoute, Router ,Params} from '@angular/router';
@Component({
  selector: 'app-predstave',
  templateUrl: './predstave.component.html',
  styleUrls: ['./predstave.component.css']
})
export class PredstaveComponent implements OnInit {

  @Input() predstaveShow: Predstave;
predstave: Predstave[];
predstavaId: string;
predstavaEdt: Predstave;
pozoristeId: string;

  constructor(private predstaveService: PredstaveService,
              private pozoristaService: PozoristeService,
              private route: ActivatedRoute
            ) { }


  getPredstave(): void {
    this.predstaveService.getPredstave()
      .subscribe(predstave => this.predstave = predstave);
  }
  
    getPredstava() {
      this.predstaveService.getPredstava(this.predstavaId).subscribe(
        (predstava) => this.predstavaEdt = predstava
      );
    }

    
    deletePredstava(predstava: Predstave) {
      this.predstaveService.deletePredstava(predstava).subscribe();
      this.predstave = this.predstave.filter(f => f !== predstava);
    }


  ngOnInit() {
    if(this.route.snapshot.params['pozoristeId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.pozoristeId = params["pozoristeId"];
        }
      
      );
    this.getPredstave();
   
  }
  }
}
