import { LoginUserService } from './../../login/login-user.service';
import { LoggedInUser } from './../../models/logged-in-user';
import { ActivatedRoute, Params } from '@angular/router';
import { FilmoviService } from './../../filmovi.service';
import { BioskopiService } from './../../bioskopi.service';
import { Filmovi } from './../../models/filmovi';
import { Bioskopi } from './../../models/bioskopi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervacija3',
  templateUrl: './rezervacija3.component.html',
  styleUrls: ['./rezervacija3.component.css']
})
export class Rezervacija3Component implements OnInit {

  bioskopId: string;
  filmId: string;
  bioskop: Bioskopi;
  film: Filmovi;
  user: LoggedInUser;
  friends: LoggedInUser[];

  constructor(private bioskopiService: BioskopiService, private filmoviService: FilmoviService,
              private route: ActivatedRoute, private loginUserService: LoginUserService) { }

  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      data => {
        this.bioskop = data;
        console.log(this.bioskop);
      }
    );
  }

  getFilm() {
    this.filmoviService.getFilm(this.filmId).subscribe(
      data => {
        this.film = data;
        console.log(this.film);
      }
    );
  }

  getFriends() {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        this.loginUserService.getFriends(this.user).subscribe(
          prijatelji => {
            this.friends = prijatelji;
          }
        );
      }
    );
  }

  ngOnInit() {
      this.bioskopId = this.route.snapshot.url[2].path;
      this.filmId = this.route.snapshot.url[4].path;
      this.getBioskop();
      this.getFilm();
      this.getFriends();
    }
}

