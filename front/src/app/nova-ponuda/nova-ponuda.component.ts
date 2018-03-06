import { Location } from '@angular/common';
import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { PonudeService } from './../services/ponude.service';
import { Ponuda } from './../models/ponuda';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nova-ponuda',
  templateUrl: './nova-ponuda.component.html',
  styleUrls: ['./nova-ponuda.component.css']
})
export class NovaPonudaComponent implements OnInit {
  @Input() ponudaToEdit: Ponuda;
  oglasId: String;

  dodajPonudu(iznos: number): void{
    var ponuda =
                {
                  "userId": "tempUserId",
                  "userName": "tempUserName",
                  "oglasId": this.oglasId,
                  "iznos": iznos
                };
    this.ponudeService.insertPonuda(ponuda as Ponuda).subscribe();
    this.goBack();
  }

  updatePonuda(): void{
    this.ponudeService.updatePonuda(this.ponudaToEdit).subscribe();
  }

  goBack(): void{
    this.location.back();
  }

  izmeniPonudu(): void{

  }


  constructor(
    private ponudeService: PonudeService,
    private dataSharingService: ApplicationDataSharingServiceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.oglasId = this.dataSharingService.oglasId;
  }

}
