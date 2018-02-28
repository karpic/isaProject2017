import { PonudeService } from './services/ponude.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica/zvanicna-prodavnica.component';
import { OglasiComponent } from './oglasi/oglasi.component';
import { RekvizitService } from './rekvizit.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NoviRekvizitComponent } from './novi-rekvizit/novi-rekvizit.component';
import { KorisniciService } from './korisnici.service';
import { OglasService } from './oglas.service';
import { EqualValidatorDirective } from './validate/equal-validator.directive';
import { NoviOglasComponent } from './novi-oglas/novi-oglas.component';
import { SvePonudeComponent } from './sve-ponude/sve-ponude.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponentComponent,
    FanzonaComponent,
    ZvanicnaProdavnicaComponent,
    OglasiComponent,
    NoviRekvizitComponent,
    EqualValidatorDirective,
    NoviOglasComponent,
    SvePonudeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RekvizitService,
    KorisniciService,
    OglasService,
    PonudeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
