import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsdetailRoutingModule } from './teamsdetail-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { PlayerComponent } from './player/player.component';
import { MatExpansionModule } from '@angular/material/expansion'; 
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [TeamsComponent, PlayerComponent],
  imports: [
    CommonModule,
    TeamsdetailRoutingModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class TeamsdetailModule { }
