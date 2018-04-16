import { SkalaService } from './../../services/skala.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NovaSkala } from '../../models/nova-skala.model';
import { Skala } from '../../models/skala.model';

@Component({
  selector: 'app-skala',
  templateUrl: './skala.component.html',
  styleUrls: ['./skala.component.css']
})
export class SkalaComponent implements OnInit {
  staraSkala: Skala = new Skala("", 0, 0, 0);
  constructor(
    private skalaService: SkalaService
  ) { }

  onSkalaSubmit(forma: NgForm) {
    this.skalaService.updateSkala(this.staraSkala).subscribe();
  }

  ngOnInit() {
    this.skalaService.getSkalas().subscribe(
      (skale) => this.staraSkala = skale[0]
    );
  }

}
