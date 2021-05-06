import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrieslistComponent } from './countrieslist/countrieslist.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'countries',  component: CountrieslistComponent },
  { path: 'teams/:cid', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
