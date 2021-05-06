import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { PointstableComponent } from './pointstable/pointstable.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [PointstableComponent],
  imports: [
    CommonModule,
    LeaderboardRoutingModule,
    MatTableModule
  ]
})
export class LeaderboardModule { }
