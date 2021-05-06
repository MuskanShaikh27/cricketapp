import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Points } from './points';
import { POINTS } from './mockpoints_data';

@Injectable({
  providedIn: 'root'
})
export class PointserviceService {

  constructor() { }
  getPoints(): Observable<Points[]> {

    return of(POINTS);
  }
}
