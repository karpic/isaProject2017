import { Component, OnInit, Input } from '@angular/core';
import { SalaService } from '../sala.service';
import { Sala } from '../models/sala';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
@Input() salaShow: Sala;
sale: Sala[];
salaId: string;
salaEdt: Sala;

  constructor(private salaService: SalaService) { }


  getSale(): void {
    this.salaService.getSale()
      .subscribe(sale => this.sale = sale);
  }
  
    getSala() {
      this.salaService.getSala(this.salaId).subscribe(
        (sala) => this.salaEdt = sala
      );
    }

  ngOnInit() {
    this.getSale();
  }

}
