import { Component, OnInit, Input } from '@angular/core';
import { FilmoviService } from '../filmovi.service';
import { Filmovi } from '../models/filmovi';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
@Component({
  selector: 'app-filmovi',
  templateUrl: './filmovi.component.html',
  styleUrls: ['./filmovi.component.css']
})

export class FilmoviComponent implements OnInit {
  @Input() filmoviShow: Filmovi;
  filmovi: Filmovi[];
  filmId: string;
  filmEdt: Filmovi;
  bioskopId: string;


  constructor(private filmoviService: FilmoviService,
    private route: ActivatedRoute,
    private bioskopiService: BioskopiService) { }


  getFilmovi(): void {
    this.filmoviService.getFilmovi()
      .subscribe(filmovi => this.filmovi = filmovi);
  }

  getFilm() {
    this.filmoviService.getFilm(this.filmId).subscribe(
      (film) => this.filmEdt = film
    );
  }

  deleteFilm(film: Filmovi) {
    this.filmoviService.deleteFilm(film).subscribe();
    this.filmovi = this.filmovi.filter(f => f !== film);
  }

  ngOnInit() {
    if (this.route.snapshot.params['bioskopId']) {
      this.route.params.subscribe(
        (params: Params) => {
          this.bioskopId = params['bioskopId'];
        }

      );
      this.getFilmovi();

    }
  }

}
