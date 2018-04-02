import { NoviBioskop } from './models/novi-bioskop.model';
import { AdminSistemComponent } from './admin-sistem/admin-sistem.component';
import { PregledPonudaComponent } from './pregled-ponuda/pregled-ponuda.component';
import { NeodobreniOglasiComponent } from './admin-fanzona/neodobreni-oglasi/neodobreni-oglasi.component';
import { AdminFanzonaComponent } from './admin-fanzona/admin-fanzona.component';
import { RekvizitEditComponent } from './zvanicna-prodavnica/rekvizit-edit/rekvizit-edit.component';
import { NoviRekvizit } from './models/novi-rekvizit';
import { OglasEditComponent } from './oglasi/oglas-edit/oglas-edit.component';
import { NovaPonudaComponent } from './nova-ponuda/nova-ponuda.component';
import { OglasiComponent } from './oglasi/oglasi.component';
import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica/zvanicna-prodavnica.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { SvePonudeComponent } from './sve-ponude/sve-ponude.component';
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { PozoristaComponent } from './pozorista/pozorista.component';
import { RepertoarComponent } from './repertoar/repertoar.component';
import { RepertoarPozoristaComponent } from './repertoar-pozorista/repertoar-pozorista.component';
import { RekvizitiComponent } from './admin-fanzona/rekviziti/rekviziti.component';
import { BioskopEditComponent } from './admin-sistem/bioskop-edit/bioskop-edit.component';
import { PozoristeEditComponent } from './admin-sistem/pozoriste-edit/pozoriste-edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fanzona', component: FanzonaComponent, children: [
    {path: 'prodavnica', component: ZvanicnaProdavnicaComponent},
    {path: 'oglasi', component: OglasiComponent},
    {path: 'novioglas', component: OglasEditComponent},
    {path: 'admin', component: AdminFanzonaComponent, children: [
      {path: 'novirekvizit', component: RekvizitEditComponent},
      {path: 'neodobreni', component: NeodobreniOglasiComponent},
      {path: 'rekviziti', component: RekvizitiComponent},
      {path: 'rekvizit/:rekvizitId', component: RekvizitEditComponent}
    ]}
  ]},
  {path: 'ponude/:userId', component: PregledPonudaComponent},
  {path: 'sysadmin', component: AdminSistemComponent, children: [
    {path: 'novibioskop', component: BioskopEditComponent},
    {path: 'novopozoriste', component: PozoristeEditComponent}
  ]},
  {path: 'bioskopi', component: BioskopiComponent},
  {path: 'pozorista', component: PozoristaComponent},
  {path: 'repertoar', component: RepertoarComponent},
  {path: 'repertoar-pozorista', component: RepertoarPozoristaComponent}


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
