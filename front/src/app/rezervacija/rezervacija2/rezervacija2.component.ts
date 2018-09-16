import { PredstaveService } from './../../predstave.service';
import { FilmoviService } from './../../filmovi.service';
import { Filmovi } from './../../models/filmovi';
import { PozoristeService } from './../../services/pozorista.service';
import { Pozorista } from './../../models/pozorista';
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
  selectedMovie: string;
  selectedShow: string;
  bioskopBool: boolean;
  pozoristeBool: boolean;
  pozoristeId: string;
  bioskop: Bioskopi;
  pozoriste: Pozorista;
  filmovi = [];
  predstave = [];

  constructor(private route: ActivatedRoute, private bioskopiService: BioskopiService, private pozoristeService: PozoristeService,
     private filmoviService: FilmoviService, private predstaveService: PredstaveService) { }

  ngOnInit() {
    if (this.route.snapshot.url[1].path === 'bioskop') {
      this.route.params.subscribe(
        (params: Params) => {
          this.bioskopId = params['bioskopId'];
        }
      );
      this.bioskopBool = true;
      this.pozoristeBool = false;
      this.getBioskop();
    }
    if (this.route.snapshot.url[1].path === 'pozoriste') {
      this.route.params.subscribe(
        (params: Params) => {
          this.pozoristeId = params['pozoristeId'];
        }
      );
      this.bioskopBool = false;
      this.pozoristeBool = true;
      this.getPozoriste();
    }
  }

  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => {
        this.bioskop = bioskop;
        console.log(bioskop);
        for (const s of this.bioskop.repertoar) {
          this.filmoviService.getFilm(s).subscribe(
            data => {
              this.filmovi.push(data);
            }
          );
        }
        console.log(this.filmovi);
      }
    );

  }

  getPozoriste() {
    this.pozoristeService.getPozoriste(this.pozoristeId).subscribe(
      pozoriste => {
        this.pozoriste = pozoriste;
        console.log(this.pozoriste);
        for (const s of this.pozoriste.repertoar) {
          console.log('ID predstave' + s);
          this.predstaveService.getPredstava(s).subscribe(
            data => {
              this.predstave.push(data);
            }
          );
        }
        console.log(this.predstave);
      }
    );
  }

}
