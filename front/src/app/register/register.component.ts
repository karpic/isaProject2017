import { Korisnik } from './../models/korisnik';
import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../korisnici.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Registruj(email: string, password: string, ime: string, prezime: string, grad: string, brtel: string): void {
    this.korisniciService.insertKorisnik({ime,prezime,email,password,grad,brtel} as Korisnik).subscribe();
  }

  constructor(private korisniciService: KorisniciService) { }

  ngOnInit() {

  }



}
