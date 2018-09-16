import { Projekcija } from './../../models/projekcija';
import { LoggedInUser } from './../../models/logged-in-user';
import { LoginUserService } from './../../login/login-user.service';
import { Params } from '@angular/router/src/shared';
import { PredstaveService } from './../../predstave.service';
import { FilmoviService } from './../../filmovi.service';
import { PozoristeService } from './../../services/pozorista.service';
import { BioskopiService } from './../../bioskopi.service';
import { ActivatedRoute } from '@angular/router';
import { Predstave } from './../../models/predstave';
import { Filmovi } from './../../models/filmovi';
import { Pozorista } from './../../models/pozorista';
import { Bioskopi } from './../../models/bioskopi';
import { Component, OnInit } from '@angular/core';
import { ProjekcijaService } from '../../projekcija.service';
import { ProjekcijaPozService } from '../../projekcija-poz.service';
import { ProjekcijaPoz } from '../../models/projekcijaPoz';

@Component({
  selector: 'app-rezervacija3',
  templateUrl: './rezervacija3.component.html',
  styleUrls: ['./rezervacija3.component.css']
})

export class Rezervacija3Component implements OnInit {

  filmBool: boolean;
  predstavaBool: boolean;
  filmId: string;
  film: Filmovi;
  predstava: Predstave;
  predstavaId: string;
  projekcije = [];
  projekcijePoz = [];
  selectedSeatsProjekcija = [];
  user: LoggedInUser;
  friends: LoggedInUser[];
  selectedFriends = [];
  projekcijaUpd: Projekcija;
  projekcijaPozUpd: ProjekcijaPoz;

  constructor(private route: ActivatedRoute, private bioskopiService: BioskopiService, private pozoristeService: PozoristeService,
    private filmoviService: FilmoviService, private predstaveService: PredstaveService,
    private projekcijaService: ProjekcijaService, private projekcijaPozService: ProjekcijaPozService,
    private loginUserService: LoginUserService) { }

  ngOnInit() {
    if (this.route.snapshot.url[1].path === 'bioskop') {
      this.route.params.subscribe(
        (params: Params) => {
          this.filmId = params['filmId'];
        }
      );
      this.filmBool = true;
      this.predstavaBool = false;
      this.getFilm();
    }
    if (this.route.snapshot.url[1].path === 'pozoriste') {
      this.route.params.subscribe(
        (params: Params) => {
          this.predstavaId = params['predstavaId'];
        }
      );
      this.filmBool = false;
      this.predstavaBool = true;
      this.getPredstava();
    }
    this.getUser();

  }

  getUser() {
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

  getFilm() {
    this.filmoviService.getFilm(this.filmId).subscribe(
      film => {
        this.film = film;
        for (const s of this.film.projekcije) {
          this.projekcijaService.getProjekcija(s).subscribe(
            data => {
              this.projekcije.push(data);
            }
          );
        }

      }
    );
  }

  getPredstava() {
    this.predstaveService.getPredstava(this.predstavaId).subscribe(
      predstava => {
        this.predstava = predstava;
        for (const s of this.predstava.projekcijePoz) {
          this.projekcijaPozService.getProjekcijaPoz(s).subscribe(
            data => {
              this.projekcijePoz.push(data);
              this.selectedSeatsProjekcija.push([]);
            }
          );
        }
      }
    );
  }

  rezervisi(i: number) {
    this.projekcijaPozUpd = this.projekcijePoz[i];
    console.log(i);
    for (const s of this.selectedSeatsProjekcija[i]) {
      console.log(s);
      this.projekcijaPozUpd.br_mesta[s] = true;
    }
    console.log(this.projekcijaPozUpd);
    for (const e of this.friends) {
      console.log(e.email);
    }
  }

}
