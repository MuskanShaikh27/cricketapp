import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountrieslistComponent } from './countrieslist/countrieslist.component';
import { TeamsComponent } from './teams/teams.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';  
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [CountrieslistComponent, TeamsComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule
  ]
})
export class CountriesModule { }
