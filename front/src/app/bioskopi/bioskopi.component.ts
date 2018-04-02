import { Component, OnInit , Input} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';
import { ViewChild } from '@angular/core/src/metadata/di';
@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
  @Input() bioskopShow :Bioskopi
  constructor(private bioskopiService: BioskopiService) { }

  ngOnInit() {
  }

}
