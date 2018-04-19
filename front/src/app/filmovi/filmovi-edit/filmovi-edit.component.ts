import { Component, OnInit } from '@angular/core';
import { FilmoviService } from '../../filmovi.service';
import { Location } from '@angular/common';
import { Filmovi } from '../../models/filmovi';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { NoviFilm } from '../../models/novi-film';
import { ActivatedRoute, Params } from '@angular/router';
import { BioskopiService } from '../../bioskopi.service';

@Component({
  selector: 'app-filmovi-edit',
  templateUrl: './filmovi-edit.component.html',
  styleUrls: ['./filmovi-edit.component.css']
})
export class FilmoviEditComponent implements OnInit {
  noviFilm: NoviFilm = new NoviFilm("","","","","","","","","","",0);
  updtFilm: Filmovi;
  editFlag: boolean;
  filmId: string;
  filmEdt : Filmovi;
  filmovi: Filmovi[];
  bioskopId: string

  constructor(private filmoviService: FilmoviService,
              private bioskopiService: BioskopiService,
              private location: Location,
              private route: ActivatedRoute) { }

              
            
        noviFilmSubmit(forma: NgForm) {
                this.noviFilm.naziv = forma.value.naziv;
                this.noviFilm.glumci = forma.value.glumci;
                this.noviFilm.zanr = forma.value.zanr;
                this.noviFilm.reditelj = forma.value.reditelj;
                this.noviFilm.trajanje = forma.value.trajanje;
                this.noviFilm.poster = forma.value.poster;
                this.noviFilm.ocena = forma.value.ocena;
                this.noviFilm.opis = forma.value.opis;
                this.noviFilm.sala = forma.value.sala;
                this.noviFilm.termin = forma.value.termin;   
                this.noviFilm.cena = forma.value.cena;            
                this.filmoviService.insertFilm(this.noviFilm).subscribe();
                forma.reset();
                this.location.back();
              }

              
              getFilm() {
                this.filmoviService.getFilm(this.filmId).subscribe(
                  (film) => this.filmEdt = film
                );
              } 

              filmEdit() {
                this.filmoviService.updateFilm(this.filmEdt).subscribe();
                this.location.back();
              }

             

            
  ngOnInit() {
    if(this.route.snapshot.params['filmId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.filmId = params["filmId"];
        }
      );
      this.getFilm();
    }  

  }

}
