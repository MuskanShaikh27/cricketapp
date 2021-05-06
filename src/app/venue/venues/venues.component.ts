import { Component, OnInit } from '@angular/core';
import { VenueserviceService } from '../venueservice.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Venue [];
  constructor(private venueService: VenueserviceService) { }

  ngOnInit() {
    this.getVenue();
    console.log(this.venues);
  }
   
  getVenue(): void{
    this.venueService.getVenues()
                      .subscribe(venue => this.venues = venue);
  }
}
