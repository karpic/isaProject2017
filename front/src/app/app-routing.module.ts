import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { PrijateljiComponent } from './user/prijatelji/prijatelji.component';
import { ZahteviComponent } from './user/zahtevi/zahtevi.component';
import { Rezervacija4Component } from './rezervacija/rezervacija4/rezervacija4.component';
import { Rezervacija3Component } from './rezervacija/rezervacija3/rezervacija3.component';
import { Rezervacija2Component } from './rezervacija/rezervacija2/rezervacija2.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { SkalaComponent } from './admin-sistem/skala/skala.component';
import { SysadminAuthGuard } from './auth-guards/sysadmin-auth-guard.service';
import { RecenzijaComponent } from './admin-fanzona/recenzija/recenzija.component';
import { BpAdminEditComponent } from './admin-sistem/bp-admin-edit/bp-admin-edit.component';
import { FanzonaAdminEditComponent } from './admin-sistem/fanzona-admin-edit/fanzona-admin-edit.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { GmLokacijaComponent } from './gm-lokacija/gm-lokacija.component';
import { FanzonaAuthGuard } from './auth-guards/fanzona-auth-guard.service';

import { UserComponent } from './user/user.component';
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
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { PozoristaComponent } from './pozorista/pozorista.component';
import { RepertoarComponent } from './repertoar/repertoar.component';
import { RepertoarPozoristaComponent } from './repertoar-pozorista/repertoar-pozorista.component';
import { RekvizitiComponent } from './admin-fanzona/rekviziti/rekviziti.component';
import { BioskopEditComponent } from './admin-sistem/bioskop-edit/bioskop-edit.component';
import { PozoristeEditComponent } from './admin-sistem/pozoriste-edit/pozoriste-edit.component';
import { FanAdminAuthGuard } from './auth-guards/fanadmin-auth-guard.service';
import { BioskopiEditComponent } from './bioskopi/bioskopi-edit/bioskopi-edit.component';
import { PozoristaEditComponent } from './pozorista/pozorista-edit/pozorista-edit.component';
import { BioskopiListComponent } from './bioskopi/bioskopi-list/bioskopi-list.component';
import { PozoristaListComponent } from './pozorista/pozorista-list/pozorista-list.component';
import { KarteComponent } from './karte/karte.component';
import { FilmoviComponent } from './filmovi/filmovi.component';
import { PredstaveComponent } from './predstave/predstave.component';
import { FilmoviEditComponent } from './filmovi/filmovi-edit/filmovi-edit.component';
import { PredstaveEditComponent } from './predstave/predstave-edit/predstave-edit.component';
import { SysadminEditComponent } from './admin-sistem/sysadmin-edit/sysadmin-edit.component';
import { SalaComponent } from './sala/sala.component';
import { SalaEditComponent } from './sala/sala-edit/sala-edit.component';
import { AdminBpComponent } from './admin-bp/admin-bp.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'fanzona', component: FanzonaComponent, canActivate: [FanzonaAuthGuard], children: [
      { path: 'prodavnica', component: ZvanicnaProdavnicaComponent },
      { path: 'ponude', component: PregledPonudaComponent },
      { path: 'oglasi', component: OglasiComponent },
      { path: 'novioglas', component: OglasEditComponent },
      {
        path: 'admin', component: AdminFanzonaComponent, canActivate: [FanAdminAuthGuard], children: [
          { path: 'novirekvizit', component: RekvizitEditComponent },
          { path: 'neodobreni', component: NeodobreniOglasiComponent },
          { path: 'rekviziti', component: RekvizitiComponent },
          { path: 'rekvizit/:rekvizitId', component: RekvizitEditComponent },
          { path: 'recenzija', component: RecenzijaComponent },

        ]
      }
    ]
  },
  { path: 'obavestenja', component: ObavestenjaComponent},
  {
    path: 'sysadmin', component: AdminSistemComponent, canActivate: [SysadminAuthGuard], children: [
      { path: 'novibioskop', component: BioskopEditComponent },
      { path: 'novopozoriste', component: PozoristeEditComponent },
      { path: 'novifanadmin', component: FanzonaAdminEditComponent },
      { path: 'novibpadmin', component: BpAdminEditComponent },
      { path: 'novisysadmin', component: SysadminEditComponent },
      { path: 'skala', component: SkalaComponent }
    ]
  },
  { path: 'bioskopi', component: BioskopiComponent },
  { path: 'pozorista', component: PozoristaComponent },
  { path: 'repertoar', component: RepertoarComponent },
  { path: 'repertoar-pozorista', component: RepertoarPozoristaComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/edit-user', component: EditUserComponent },
  { path: 'gmlokacija', component: GmLokacijaComponent },
  { path: 'bioskopi/:bioskopId', component: BioskopiEditComponent },
  { path: 'filmovi/:filmId', component: FilmoviEditComponent },
  { path: 'pozorista/:pozoristeId', component: PozoristaEditComponent },
  { path: 'bioskopi-list', component: BioskopiListComponent },
  { path: 'pozorista-list', component: PozoristaListComponent },
  { path: 'karte', component: KarteComponent },
  { path: 'rezervacija', component: RezervacijaComponent },
  { path: 'rezervacija2/bioskop/:bioskopId', component: Rezervacija2Component },
  { path: 'rezervacija2/pozoriste/:pozoristeId', component: Rezervacija2Component },
  { path: 'rezervacija3', component: Rezervacija3Component },
  { path: 'rezervacija4', component: Rezervacija4Component },
  { path: 'user/zahtevi', component: ZahteviComponent },
  { path: 'filmovi/bioskopi/:bioskopId', component: FilmoviComponent },
  { path: 'predstave/pozorista/:pozoristeId', component: PredstaveComponent },
  { path: 'filmovi-edit', component: FilmoviEditComponent },
  { path: 'filmovi-edit/:bioskopId', component: FilmoviEditComponent },
  { path: 'predstave-edit', component: PredstaveEditComponent },
  { path: 'prijatelji', component: PrijateljiComponent },
  { path: 'predstave/:predstavaId', component: PredstaveEditComponent },
  { path: 'sale/filmovi/:filmoviId', component: SalaComponent },
  { path: 'sale/predstave/:predstavaId', component: SalaComponent },
  { path: 'sala-edit', component: SalaEditComponent },
  { path: 'filmovi/bioskopi/:bioskopId', component: FilmoviComponent },
];

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
