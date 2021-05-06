import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-countrieslist',
  templateUrl: './countrieslist.component.html',
  styleUrls: ['./countrieslist.component.css']
})
export class CountrieslistComponent implements OnInit {
  country:Country[];
  constructor(private conService:CountryService) { }

  ngOnInit() {
    this.getCountries();
  }
  getCountries(): void {
    this.conService.getCountries()
        .subscribe(country => this.country = country);
  }
}
