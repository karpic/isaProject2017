import { Bioskopi } from './../../models/bioskopi';
import { BioskopiService } from './../../bioskopi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rezervacija2',
  templateUrl: './rezervacija2.component.html',
  styleUrls: ['./rezervacija2.component.css']
})
export class Rezervacija2Component implements OnInit {

  bioskopId: string;
  bioskop: Bioskopi;

  constructor(private route: ActivatedRoute, private bioskopiService: BioskopiService) { }

  ngOnInit() {
    if (this.route.snapshot.params['bioskopId']) {
      this.route.params.subscribe(
        (params: Params) => {
          this.bioskopId = params['bioskopId'];
        }
      );
      this.getBioskop();
    }
  }

  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => this.bioskop = bioskop
    );
  }

}
