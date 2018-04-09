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

import { AgmCoreModule} from '@agm/core';
import { GmLokacijaComponent } from './gm-lokacija/gm-lokacija.component';

import { LoginUserService } from './login/login-user.service';


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
    SvePonudeComponent,
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
    GmLokacijaComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyB79Hum1sxQbxwgiccMIGm7zzYVZnCVoDI'
    }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GeocoderService,
    FanzonaAuthGuard,
    FanAdminAuthGuard,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
