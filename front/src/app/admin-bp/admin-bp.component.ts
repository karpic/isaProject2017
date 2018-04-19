import { Component, OnInit,Input} from '@angular/core';
import { KorisniciService } from '../korisnici.service';
import { Korisnik } from '../models/korisnik';


@Component({
  selector: 'app-admin-bp',
  templateUrl: './admin-bp.component.html',
  styleUrls: ['./admin-bp.component.css']
})
export class AdminBpComponent implements OnInit {

@Input() bpAdminShow: Korisnik;
  
  constructor(private korisniciService: KorisniciService) { }

  ngOnInit() {
  }

}
