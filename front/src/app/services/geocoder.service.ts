import { Injectable, NgZone } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {} from '@types/googlemaps';
import { GoogleMapsAPIWrapper, MapsAPILoader } from "@agm/core";
import {} from '@types/googlemaps';


declare var google: any;

@Injectable()
export class GeocoderService extends GoogleMapsAPIWrapper{

  getGeoLocation(address: string): Observable<any> {
    console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
        geocoder.geocode({
            'address': address
        }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0].geometry.location);
                observer.complete();
            } else {
                console.log('Error: ', results, ' & Status: ', status);
                observer.error();
            }
        });
    });
  }

  constructor(private __loader: MapsAPILoader, private __zone: NgZone) {
    super(__loader, __zone);

  }
}
