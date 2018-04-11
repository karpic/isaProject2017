import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Bioskopi } from '../../models/bioskopi';

@Component({
  selector: 'app-bioskopi-item',
  templateUrl: './bioskopi-item.component.html',
  styleUrls: ['./bioskopi-item.component.css']
})
export class BioskopiItemComponent implements OnInit {
  @Input() bioskopiShow: Bioskopi;
  @Output() bioskopSelect: EventEmitter<any> = new EventEmitter<void>();
 
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.bioskopSelect.emit();
  }
  selectedBioskop(bioskop: Bioskopi) {
    this.bioskopSelect.emit(bioskop);
  }
}
