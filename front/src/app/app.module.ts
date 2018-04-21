import { ObavestenjaService } from './services/obavestenja.service';
import { PrijateljiComponent } from './user/prijatelji/prijatelji.component';
import { SkalaService } from './services/skala.service';
import { CheckLoginService } from './nav-component/check-login.service';
import { BpAdminAuthGuard } from './auth-guards/bpadmin-auth-guard.service';
import { SysadminAuthGuard } from './auth-guards/sysadmin-auth-guard.service';
import { GeocoderService } from './services/geocoder.service';
import { FanzonaAuthGuard } from './auth-guards/fanzona-auth-guard.service';

import { PozoristeService } from './services/pozorista.service';
import { BioskopiService } from './bioskopi.service';
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
import { KorisniciService } from './korisnici.service';
import { OglasService } from './oglas.service';
import { EqualValidatorDirective } from './validate/equal-validator.directive';
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
import { OglasiListComponent } from './oglasi/oglasi-list/oglasi-list.component';
import { OglasItemComponent } from './oglasi/oglasi-list/oglas-item/oglas-item.component';
import { OglasDetailsComponent } from './oglasi/oglas-details/oglas-details.component';
import { PonudeComponent } from './oglasi/ponude/ponude.component';
import { OglasEditComponent } from './oglasi/oglas-edit/oglas-edit.component';
import { RekvizitEditComponent } from './zvanicna-prodavnica/rekvizit-edit/rekvizit-edit.component';
import { AdminFanzonaComponent } from './admin-fanzona/admin-fanzona.component';
import { NeodobreniOglasiComponent } from './admin-fanzona/neodobreni-oglasi/neodobreni-oglasi.component';
import { PregledPonudaComponent } from './pregled-ponuda/pregled-ponuda.component';
import { RekvizitiComponent } from './admin-fanzona/rekviziti/rekviziti.component';
import { AdminSistemComponent } from './admin-sistem/admin-sistem.component';
import { BioskopEditComponent } from './admin-sistem/bioskop-edit/bioskop-edit.component';
import { PozoristeEditComponent } from './admin-sistem/pozoriste-edit/pozoriste-edit.component';
import { UserComponent } from './user/user.component';
import { FanAdminAuthGuard } from './auth-guards/fanadmin-auth-guard.service';

import { AgmCoreModule } from '@agm/core';
import { GmLokacijaComponent } from './gm-lokacija/gm-lokacija.component';

import { LoginUserService } from './login/login-user.service';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { FanzonaAdminEditComponent } from './admin-sistem/fanzona-admin-edit/fanzona-admin-edit.component';
import { BpAdminEditComponent } from './admin-sistem/bp-admin-edit/bp-admin-edit.component';
import { BioskopiEditComponent} from './bioskopi/bioskopi-edit/bioskopi-edit.component';
import { PozoristaEditComponent } from './pozorista/pozorista-edit/pozorista-edit.component';
import { RecenzijaComponent } from './admin-fanzona/recenzija/recenzija.component';
import { SkalaComponent } from './admin-sistem/skala/skala.component';
import { BioskopiListComponent } from './bioskopi/bioskopi-list/bioskopi-list.component';
import { BioskopiItemComponent } from './bioskopi/bioskopi-list/bioskopi-item/bioskopi-item.component';
import { PozoristaItemComponent } from './pozorista/pozorista-item/pozorista-item.component';
import { PozoristaListComponent } from './pozorista/pozorista-list/pozorista-list.component';
import { KarteComponent } from './karte/karte.component';
import { KartaService } from './karta.service';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { Rezervacija2Component } from './rezervacija/rezervacija2/rezervacija2.component';
import { Rezervacija3Component } from './rezervacija/rezervacija3/rezervacija3.component';
import { Rezervacija4Component } from './rezervacija/rezervacija4/rezervacija4.component';
import { FilmoviComponent } from './filmovi/filmovi.component';
import { PredstaveComponent } from './predstave/predstave.component';
import { ZahteviComponent } from './user/zahtevi/zahtevi.component';
import { FilmoviService } from './filmovi.service';
import { PredstaveService } from './predstave.service';
import { FilmoviEditComponent } from './filmovi/filmovi-edit/filmovi-edit.component';
import { PredstaveEditComponent } from './predstave/predstave-edit/predstave-edit.component';
import { SalaComponent } from './sala/sala.component';
import { SalaService } from './sala.service';
import { SysadminEditComponent } from './admin-sistem/sysadmin-edit/sysadmin-edit.component';
import { SalaEditComponent } from './sala/sala-edit/sala-edit.component';
import { AdminBpComponent } from './admin-bp/admin-bp.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';


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
    EqualValidatorDirective,
    NovaPonudaComponent,
    BioskopiComponent,
    PozoristaComponent,
    RepertoarComponent,
    RepertoarPozoristaComponent,
    RekvizitiListComponent,
    RekvizitItemComponent,
    RekvizitDetailsComponent,
    OglasiListComponent,
    OglasItemComponent,
    OglasDetailsComponent,
    PonudeComponent,
    OglasEditComponent,
    RekvizitEditComponent,
    AdminFanzonaComponent,
    NeodobreniOglasiComponent,
    PregledPonudaComponent,
    RekvizitiComponent,
    AdminSistemComponent,
    BioskopEditComponent,
    PozoristeEditComponent,
    UserComponent,
    GmLokacijaComponent,
    EditUserComponent,
    FanzonaAdminEditComponent,
    BpAdminEditComponent,
    BioskopiEditComponent,
    PozoristaEditComponent,
    RecenzijaComponent,
    SkalaComponent,
    BioskopiItemComponent,
    BioskopiListComponent,
    PozoristaItemComponent,
    PozoristaListComponent,
    KarteComponent,
    RezervacijaComponent,
    Rezervacija2Component,
    Rezervacija3Component,
    Rezervacija4Component,
    FilmoviComponent,
    PredstaveComponent,
    ZahteviComponent,
    FilmoviEditComponent,
    PredstaveEditComponent,
    PrijateljiComponent,
    SalaComponent,
    SysadminEditComponent,
    SalaEditComponent,
    AdminBpComponent,
    ObavestenjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCv0rcmrxooJjdEpLKDvCxF93d_-TLHyKU'
    }),
  ],
  providers: [
    ObavestenjaService,
    SkalaService,
    GeocoderService,
    FanzonaAuthGuard,
    FanAdminAuthGuard,
    SysadminAuthGuard,
    BpAdminAuthGuard,
    BioskopiService,
    PozoristeService,
    RekvizitService,
    KorisniciService,
    OglasService,
    PonudeService,
    ApplicationDataSharingServiceService,
    TokenStorage,
    AuthService,
    LoginUserService,
    CheckLoginService,
    KartaService,
    FilmoviService,
    PredstaveService,
    SalaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
