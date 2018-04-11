import { KorisniciService } from './../../korisnici.service';
import { Korisnik } from './../../models/korisnik';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp-admin-edit',
  templateUrl: './bp-admin-edit.component.html',
  styleUrls: ['./bp-admin-edit.component.css']
})
export class BpAdminEditComponent implements OnInit {
  korisnik: Korisnik = new Korisnik("", "", "", "", "", "");

  constructor(
    private korisniciService: KorisniciService
  ) { }

  ngOnInit() {
  }

  onNoviBpAdminSubmit(forma: NgForm) {
    this.korisnik.ime = forma.value.ime;
    this.korisnik.prezime = forma.value.prezime;
    this.korisnik.grad = forma.value.grad;
    this.korisnik.brtel = forma.value.brtel;
    this.korisnik.email = forma.value.email;
    this.korisnik.password = forma.value.pass;
    this.korisniciService.isertBpAdmin(this.korisnik as Korisnik).subscribe();
    forma.reset();
  }

}
