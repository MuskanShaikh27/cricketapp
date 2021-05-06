import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Country } from './country';
import { COUNTRY } from './mock_data';
import { Teams } from './country';
import { TEAMS } from './mock_data';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]>{
    
    return of(COUNTRY);
  }

  getTeams(id: number): Observable<Teams> {
    return of(TEAMS.find(team => team.cid === id ));
  }
}
