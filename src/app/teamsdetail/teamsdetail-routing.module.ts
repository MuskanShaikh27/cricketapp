import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path: 'teamsinfo', component: TeamsComponent
  },
  {
    path: 'player/:pid', component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsdetailRoutingModule { }
