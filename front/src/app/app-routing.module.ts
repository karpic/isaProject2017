import { NovaPonudaComponent } from './nova-ponuda/nova-ponuda.component';
import { NoviRekvizitComponent } from './novi-rekvizit/novi-rekvizit.component';
import { OglasiComponent } from './oglasi/oglasi.component';
import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica/zvanicna-prodavnica.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { NoviOglasComponent } from './novi-oglas/novi-oglas.component';
import { SvePonudeComponent } from './sve-ponude/sve-ponude.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fanzona', component: FanzonaComponent},
  {path: 'prodavnica', component: ZvanicnaProdavnicaComponent},
  {path: 'oglasi', component: OglasiComponent},
  {path: 'novirekvizit', component: NoviRekvizitComponent},
  {path: 'novioglas', component: NoviOglasComponent},
  {path: 'oglasi/:id/ponude', component: SvePonudeComponent},
  {path: 'novaponuda', component: NovaPonudaComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
