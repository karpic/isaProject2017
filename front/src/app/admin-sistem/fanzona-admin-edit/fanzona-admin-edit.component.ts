import { KorisniciService } from './../../korisnici.service';
import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../models/korisnik';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fanzona-admin-edit',
  templateUrl: './fanzona-admin-edit.component.html',
  styleUrls: ['./fanzona-admin-edit.component.css']
})
export class FanzonaAdminEditComponent implements OnInit {
  korisnik: Korisnik = new Korisnik("", "", "", "", "", "");
  constructor(
    private korisniciService: KorisniciService
  ) { }

  onNoviFandminSubmit(forma: NgForm){
    this.korisnik.ime = forma.value.ime;
    this.korisnik.prezime = forma.value.prezime;
    this.korisnik.grad = forma.value.grad;
    this.korisnik.brtel = forma.value.brtel;
    this.korisnik.email = forma.value.email;
    this.korisnik.password = forma.value.pass;
    this.korisniciService.isertFanadmin(this.korisnik as Korisnik).subscribe();
    forma.reset();
  }

  ngOnInit() {
  }

}
