import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venue/venues/venues.component';
import { TeamsComponent } from './teamsdetail/teams/teams.component';

import { CountrieslistComponent } from './countries/countrieslist/countrieslist.component';
import { MatchsummaryComponent } from './matches/matchsummary/matchsummary.component';
import { PointstableComponent } from './leaderboard/pointstable/pointstable.component';
import { ResultsComponent } from './result/results/results.component';
const routes: Routes = [
  { path: '',   redirectTo: '/countries', pathMatch: 'full' },
  {
     path:'venues', pathMatch: 'full',component:VenuesComponent
   },
   {
    path:'teamsinfo', pathMatch: 'full',component:TeamsComponent
  },
  {
    path:'match-center', pathMatch: 'full',component:MatchsummaryComponent
  },
  {
    path:'leaderboard', pathMatch: 'full',component:PointstableComponent
  },
  {
    path:'winner', pathMatch: 'full',component:ResultsComponent
  },
  // {
  //   path:'matches', redirectTo: '/matches', pathMatch: 'full'
  // },
  // { path: 'crisis-center', component: CrisisListComponent },
  // // { path: 'countries', component: CountryListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
