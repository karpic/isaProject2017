import { PonudeService } from './../../services/ponude.service';
import { RekvizitService } from './../../rekvizit.service';
import { Oglas } from './../../models/oglas';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ponuda } from '../../models/ponuda';

@Component({
  selector: 'app-oglas-details',
  templateUrl: './oglas-details.component.html',
  styleUrls: ['./oglas-details.component.css']
})
export class OglasDetailsComponent implements OnInit {
  @Input() oglasToDisplay: Oglas;
  @ViewChild('ponudaForm') ponudaForm: NgForm;
  ponudaFormActive = false;
  constructor(private ponudeService: PonudeService) { }

  ngOnInit() {
  }


  onPonudaSubmit(ponudaForm: NgForm) {
    var ponuda =
                {
                  "userId": "tempUserId",
                  "userName": "tempUserName",
                  "oglasId": this.oglasToDisplay.id,
                  "iznos": this.ponudaForm.value.iznos
                };
    this.ponudeService.insertPonuda(ponuda as Ponuda).subscribe();
    this.togglePonudaForm();
  }

  togglePonudaForm() {
    this.ponudaFormActive = !this.ponudaFormActive;
    this.ponudaForm.reset();
  }

}
