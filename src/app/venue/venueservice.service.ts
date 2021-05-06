import { Injectable } from '@angular/core';
import { Venue } from './venue';
import { VENUE } from './mock_venue_data';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VenueserviceService {

  constructor() { }

  getVenues(): Observable<Venue[]>{
    return of(VENUE);
  }
}
