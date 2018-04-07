import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
    'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class GeocoderService{
  private baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

  getLonLatFromAddres(address: string): Observable<any>{
    let words = address.split(" ");
    let addressUrlPart = "address="
    for(let word of words){
      addressUrlPart = addressUrlPart + "+" + word;
    }
    let finalUrl = this.baseUrl + addressUrlPart + '&key=AIzaSyB79Hum1sxQbxwgiccMIGm7zzYVZnCVoDI';
    return this.http.get(finalUrl, httpOptions);

  }

  constructor(private http: HttpClient
  ){}
}
