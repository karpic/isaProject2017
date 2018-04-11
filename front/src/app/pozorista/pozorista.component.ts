import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PozoristeService } from '../services/pozorista.service';
import { Pozorista } from '../models/pozorista';



@Component({
  selector: 'app-pozorista',
  templateUrl: './pozorista.component.html',
  styleUrls: ['./pozorista.component.css']
})
export class PozoristaComponent implements OnInit {
@Input() pozoristaShow: PozoristeService;
@Output() pozoristaSelect: EventEmitter<any> = new EventEmitter<void>();

pozorista : Pozorista[];

getPozorista(): void{
  this.pozoristeService.getPozorista().subscribe(pozorista => this.pozorista = pozorista)
}
  constructor(private pozoristeService: PozoristeService) { }

  ngOnInit() {
    this.getPozorista();
  }

}
