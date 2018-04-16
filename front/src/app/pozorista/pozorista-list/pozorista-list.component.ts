import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Pozorista } from '../../models/pozorista';
import { PozoristeService } from './../../services/pozorista.service';

@Component({
  selector: 'app-pozorista-list',
  templateUrl: './pozorista-list.component.html',
  styleUrls: ['./pozorista-list.component.css']
})
export class PozoristaListComponent implements OnInit {
@Output() pozoristeSelect: EventEmitter<any> = new EventEmitter<void>(); 
pozorista: Pozorista[];
pozoristeId: string;
pozoristeEdit: Pozorista;

  constructor(private pozoristeService: PozoristeService) { }

  getPozorista(): void {
    this.pozoristeService.getPozorista()
      .subscribe(pozorista => this.pozorista = pozorista);
  }
  
  getPozoriste() {
    this.pozoristeService.getPozoriste(this.pozoristeId).subscribe(
      (pozoriste) => this.pozoristeEdit = pozoriste
    );
  }
    ngOnInit() {
      this.getPozorista();
    }
    selectedPozoriste(pozoriste: Pozorista) {
      this.pozoristeSelect.emit(pozoriste);
    }
  }
