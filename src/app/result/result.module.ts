import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
