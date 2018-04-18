import { Component, OnInit, Input} from '@angular/core';
import { Predstave } from '../models/predstave';
import { PredstaveService } from '../predstave.service';

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

  constructor(private predstaveService: PredstaveService) { }


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
    this.getPredstave();
    console.log(this.predstave);
  }

}
