import { KorisniciService } from './../../korisnici.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Korisnik } from '../../models/korisnik';

@Component({
  selector: 'app-sysadmin-edit',
  templateUrl: './sysadmin-edit.component.html',
  styleUrls: ['./sysadmin-edit.component.css']
})
export class SysadminEditComponent implements OnInit {
  korisnik: Korisnik = new Korisnik("", "", "", "", "", "");

  constructor(
    private korisniciService: KorisniciService
  ) { }

  onNoviAdminSubmit(forma: NgForm) {
    this.korisnik.ime = forma.value.ime;
    this.korisnik.prezime = forma.value.prezime;
    this.korisnik.grad = forma.value.grad;
    this.korisnik.brtel = forma.value.brtel;
    this.korisnik.email = forma.value.email;
    this.korisnik.password = forma.value.pass;
    this.korisniciService.isertSysadmin(this.korisnik as Korisnik).subscribe();
    forma.reset();
  }

  ngOnInit() {
  }

}
