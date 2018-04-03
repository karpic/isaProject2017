import { Component, OnInit , Input} from '@angular/core';
import { Bioskopi } from '../models/bioskopi';
import { BioskopiService } from '../bioskopi.service';

@Component({
  selector: 'app-bioskopi',
  templateUrl: './bioskopi.component.html',
  styleUrls: ['./bioskopi.component.css']
})
export class BioskopiComponent implements OnInit {
  @Input() bioskopiShow :Bioskopi

  constructor(private bioskopiService: BioskopiService) { }


  ngOnInit() {
  }

}
