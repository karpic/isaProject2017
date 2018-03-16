import { OglasService } from './../../oglas.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Oglas } from '../../models/oglas';

@Component({
  selector: 'app-oglasi-list',
  templateUrl: './oglasi-list.component.html',
  styleUrls: ['./oglasi-list.component.css']
})
export class OglasiListComponent implements OnInit {
  oglasi: Oglas[];
  @Output() oglasWasSelected: EventEmitter<any> = new EventEmitter<Oglas>();
  getOglasi(): void {
    this.oglasiService.getOglasi()
      .subscribe(oglasi => this.oglasi = oglasi);
  }

  constructor(private oglasiService: OglasService) { }

  ngOnInit() {
    this.getOglasi();
  }

  oglasSelected(oglas: Oglas) {
    this.oglasWasSelected.emit(oglas);
  }

}
