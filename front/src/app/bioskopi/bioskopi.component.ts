import { Component, OnInit , Input} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';

@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
  @Input() bioskopShow :Bioskopi
  bioskopi:Bioskopi[];
  constructor(private bioskopiService: BioskopiService) { }

  getBioskopi(): void {
    this.bioskopiService.getBioskopi()
      .subscribe(bioskopi => this.bioskopi = bioskopi);
  }
  ngOnInit() {
  }

}
