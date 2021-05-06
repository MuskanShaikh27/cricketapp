import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venues/venues.component';

const routes: Routes = [
  { path:'venues', component: VenuesComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
