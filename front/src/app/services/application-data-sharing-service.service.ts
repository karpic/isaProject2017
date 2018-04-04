import { Ponuda } from './../models/ponuda';
import { Injectable } from '@angular/core';
import { Oglas } from '../models/oglas';


@Injectable()
export class ApplicationDataSharingServiceService {

  oglas: Oglas;


  //za dodavanje ponuda
  oglasId: String;

  constructor() { }

}
