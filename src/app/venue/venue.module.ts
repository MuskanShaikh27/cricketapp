import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueRoutingModule } from './venue-routing.module';
import { VenuesComponent } from './venues/venues.component';

import { MatCardModule} from '@angular/material/card';  

@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenueRoutingModule,
    MatCardModule
  ]
})
export class VenueModule { }
