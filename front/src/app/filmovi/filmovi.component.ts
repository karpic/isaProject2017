import { Component, OnInit, Input } from '@angular/core';
import { FilmoviService } from '../filmovi.service';
import { Filmovi } from '../models/filmovi';

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

  constructor(private filmoviService: FilmoviService) { }


  getFilmovi(): void {
    this.filmoviService.getFilmovi()
      .subscribe(filmovi => this.filmovi = filmovi);
  }
  
    getFilm() {
      this.filmoviService.getFilm(this.filmId).subscribe(
        (film) => this.filmEdt = film
      );
    }


  ngOnInit() {
    this.getFilmovi();
    console.log(this.filmovi);
  }

}
