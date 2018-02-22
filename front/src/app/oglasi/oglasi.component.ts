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

  constructor(private oglasiService: OglasService) { }

  ngOnInit() {
    this.getOglasi();
  }

}
