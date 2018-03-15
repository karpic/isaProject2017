import { Interceptor } from './login/core/interceptor';
import { TokenStorage } from './login/core/token.storage';
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
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoviRekvizitComponent } from './novi-rekvizit/novi-rekvizit.component';
import { KorisniciService } from './korisnici.service';
import { OglasService } from './oglas.service';
import { EqualValidatorDirective } from './validate/equal-validator.directive';
import { NoviOglasComponent } from './novi-oglas/novi-oglas.component';
import { SvePonudeComponent } from './sve-ponude/sve-ponude.component';
import { ApplicationDataSharingServiceService } from './services/application-data-sharing-service.service';
import { NovaPonudaComponent } from './nova-ponuda/nova-ponuda.component';
import { AuthService } from './login/core/auth.service';
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { PozoristaComponent } from './pozorista/pozorista.component';
import { RepertoarComponent } from './repertoar/repertoar.component';
import { RepertoarPozoristaComponent } from './repertoar-pozorista/repertoar-pozorista.component';
import { RekvizitiListComponent } from './zvanicna-prodavnica/rekviziti-list/rekviziti-list.component';
import { RekvizitItemComponent } from './zvanicna-prodavnica/rekviziti-list/rekvizit-item/rekvizit-item.component';
import { RekvizitDetailsComponent } from './zvanicna-prodavnica/rekvizit-details/rekvizit-details.component';


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
    SvePonudeComponent,
    NovaPonudaComponent,
    BioskopiComponent,
    PozoristaComponent,
    RepertoarComponent,
    RepertoarPozoristaComponent,
    RekvizitiListComponent,
    RekvizitItemComponent,
    RekvizitDetailsComponent
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
    PonudeService,
    ApplicationDataSharingServiceService,
    TokenStorage,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
