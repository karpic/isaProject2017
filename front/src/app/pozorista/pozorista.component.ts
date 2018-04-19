import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PozoristeService } from '../services/pozorista.service';
import { Pozorista } from '../models/pozorista';
import { Location } from '@angular/common';
import { ApplicationDataSharingServiceService } from '../services/application-data-sharing-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pozorista',
  templateUrl: './pozorista.component.html',
  styleUrls: ['./pozorista.component.css']
})
export class PozoristaComponent implements OnInit {
@Input() pozoristaShow: PozoristeService;
@Output() pozoristaSelect: EventEmitter<any> = new EventEmitter<void>();

pozorista : Pozorista[];
pozoristeId: string;
pozoristeEdit: Pozorista;


getPozorista(): void{
  this.pozoristeService.getPozorista().subscribe(pozorista => this.pozorista = pozorista)
}

getPozoriste() {
  this.pozoristeService.getPozoriste(this.pozoristeId).subscribe(
    (pozoriste) => this.pozoristeEdit = pozoriste
  );
}

  constructor(private pozoristeService: PozoristeService,
              private location: Location,
              private appDataSharing: ApplicationDataSharingServiceService,
              private router: Router
            ) { }

  ngOnInit() {
    this.getPozorista();
    console.log(this.pozorista);
  }


  pozoristeEdt() {
    this.pozoristeService.updatePozoriste(this.pozoristeEdit).subscribe();
    this.location.back();
  }


  updatePozoriste(): void{
    this.pozoristeService.updatePozoriste(this.pozoristeEdit).subscribe();
  }

  showOnMap(pozoste: Pozorista){
    this.appDataSharing.adresa = pozoste.adresa;
    this.router.navigate(['gmlokacija']);
  }
}
