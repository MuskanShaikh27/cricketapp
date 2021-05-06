import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchsummaryComponent } from './matchsummary/matchsummary.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [MatchsummaryComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatDividerModule
  ]
})
export class MatchesModule { }
