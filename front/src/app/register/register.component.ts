import { Router } from '@angular/router';
import { Korisnik } from './../models/korisnik';
import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../korisnici.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  korisnik = new Korisnik('', '', '', '', '', '');
  confirmPassword = '';
  constructor(private korisniciService: KorisniciService, private router: Router) {

  }

  ngOnInit() {

  }

  registruj() {
    this.korisniciService.insertKorisnik(this.korisnik).subscribe();
    this.router.navigate(['login']);
  }



}
