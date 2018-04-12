import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Bioskopi } from '../../../models/bioskopi';
import { BioskopiService } from '../../../bioskopi.service';

@Component({
  selector: 'app-bioskopi-item',
  templateUrl: './bioskopi-item.component.html',
  styleUrls: ['./bioskopi-item.component.css']
})
export class BioskopiItemComponent implements OnInit {
  @Input() bioskopiShow: Bioskopi
  @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
  bioskopi: Bioskopi[];

  constructor(private bioskopiService: BioskopiService ) {}

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }
  ngOnInit() {

  }
  onSelected() {
    this.bioskopSelect.emit();
  }
  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
  }
}
