import { Ponuda } from './../models/ponuda';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../models/oglas';
import { OglasService } from '../oglas.service';

@Component({
  selector: 'app-oglasi',
  templateUrl: './oglasi.component.html',
  styleUrls: ['./oglasi.component.css']
})
export class OglasiComponent implements OnInit {
  oglasi: Oglas[];

  getOglasi(): void {
    this.oglasiService.getOglasi()
      .subscribe(oglasi => this.oglasi = oglasi);
  }

  dodajPonudu(iznos: number, oglasId: String): void{
    var ponuda =
                {
                  "userId": "tempUserId",
                  "userName": "tempUserName",
                  "oglasId": oglasId,
                  "iznos": iznos
                };
    this.ponudeService.insertPonuda(ponuda as Ponuda).subscribe();
  }
  constructor(
    private oglasiService: OglasService,
    private ponudeService: PonudeService
  ) { }

  ngOnInit() {
    this.getOglasi();
  }

}
