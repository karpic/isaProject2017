import { OglasService } from './../../oglas.service';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../../models/oglas';

@Component({
  selector: 'app-neodobreni-oglasi',
  templateUrl: './neodobreni-oglasi.component.html',
  styleUrls: ['./neodobreni-oglasi.component.css']
})
export class NeodobreniOglasiComponent implements OnInit {
  neodobreniOglasi: Oglas[];

  getNeodobreniOglasi() {
    this.oglasiService.getNeodobreni().subscribe(
      (neodobreniOglasi) => this.neodobreniOglasi = neodobreniOglasi
    );
  }

  odobriOglas(oglas: Oglas){
    oglas.odobren = true;
    this.oglasiService.updateOglas(oglas).subscribe();
    this.neodobreniOglasi = this.neodobreniOglasi.filter(o => o !== oglas);
  }

  odbijOglas(oglas: Oglas) {
    this.oglasiService.deleteOglas(oglas).subscribe();
    this.neodobreniOglasi = this.neodobreniOglasi.filter(o => o !== oglas);
    //implementirati jos i obavestenje korisniku da je oglas odbijen
    //i obrisan iz sistema
  }

  constructor(private oglasiService: OglasService) { }

  ngOnInit() {
    this.getNeodobreniOglasi();
  }

}
