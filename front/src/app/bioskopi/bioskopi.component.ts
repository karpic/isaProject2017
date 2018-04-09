import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
import { ApplicationDataSharingServiceService } from '../services/application-data-sharing-service.service';



@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
 @Input() bioskopiShow: Bioskopi;
 @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
  bioskopi: Bioskopi[];

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }
 
  constructor(private bioskopiService: BioskopiService) { }

  ngOnInit() {
    this.getBioskopi();
    console.log(this.bioskopi);
  }

  selectedBioskop() {
    this.bioskopSelect.emit();
  }

}
