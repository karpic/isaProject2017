import { NoviRekvizitComponent } from './novi-rekvizit/novi-rekvizit.component';
import { OglasiComponent } from './oglasi/oglasi.component';
import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica/zvanicna-prodavnica.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fanzona', component: FanzonaComponent},
  {path: 'prodavnica', component: ZvanicnaProdavnicaComponent},
  {path: 'oglasi', component: OglasiComponent},
  {path: 'novirekvizit', component: NoviRekvizitComponent}
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
