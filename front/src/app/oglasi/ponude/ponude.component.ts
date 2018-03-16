import { PonudeService } from './../../services/ponude.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Ponuda } from '../../models/ponuda';
import { Oglas } from '../../models/oglas';

@Component({
  selector: 'app-ponude',
  templateUrl: './ponude.component.html',
  styleUrls: ['./ponude.component.css']
})
export class PonudeComponent implements OnInit, OnChanges {

  ponude: Ponuda[];
  @Input() oglas: Oglas;


  getPonudeForOglas(): void {
    this.ponudeService.getPonudeByOglasId(this.oglas.id)
      .subscribe(ponude => this.ponude = ponude);
  }


  constructor(private ponudeService: PonudeService) { }

  ngOnInit() {
    this.getPonudeForOglas();
  }

  ngOnChanges(): void {
    this.getPonudeForOglas();
  }

}
