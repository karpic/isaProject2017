import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Bioskopi } from '../../models/bioskopi';
import { BioskopiService } from '../../bioskopi.service';


@Component({
  selector: 'app-bioskopi-list',
  templateUrl: './bioskopi-list.component.html',
  styleUrls: ['./bioskopi-list.component.css']
})
export class BioskopiListComponent implements OnInit {
  
@Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
bioskopi: Bioskopi[];

  constructor(private bioskopiService: BioskopiService) { }

  
 getBioskopi(): void {
  this.bioskopiService.getBioskopi()
    .subscribe(bioskopi => this.bioskopi = bioskopi);
}


  ngOnInit() {
    this.getBioskopi();
  }
  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
  }
}
