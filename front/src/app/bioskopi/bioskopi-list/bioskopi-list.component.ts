import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Bioskopi } from '../../models/bioskopi';
import { BioskopiService } from '../../bioskopi.service';
import { ActivatedRoute, Params } from '@angular/router';






@Component({
  selector: 'app-bioskopi-list',
  templateUrl: './bioskopi-list.component.html',
  styleUrls: ['./bioskopi-list.component.css']
})
export class BioskopiListComponent implements OnInit {
  
@Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
bioskopi: Bioskopi[];
bioskopId: string;
bioskopEdit : Bioskopi;


  constructor(private bioskopiService: BioskopiService,
              private route: ActivatedRoute
           ) { }

  
 getBioskopi(): void {
  this.bioskopiService.getBioskopi()
    .subscribe(bioskopi => this.bioskopi = bioskopi);
}

getBioskop() {
  this.bioskopiService.getBioskop(this.bioskopId).subscribe(
    (bioskop) => this.bioskopEdit = bioskop
  );
}


  ngOnInit() {
   this.getBioskopi();

  }
  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
  }
}
