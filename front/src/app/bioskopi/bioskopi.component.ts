import { Component, OnInit , Input} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
import { ApplicationDataSharingServiceService } from '../services/application-data-sharing-service.service';
import { EventEmitter } from 'events';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
 @Input() bioskopiShow: Bioskopi;

  bioskopi: Bioskopi[];

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }
 
  constructor(private bioskopiService: BioskopiService) { }

  ngOnInit() {
    this.getBioskopi();
  }

}
