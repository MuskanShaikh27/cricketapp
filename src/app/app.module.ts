import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';  

import { CountriesModule } from './countries/countries.module';
import { VenueModule } from './venue/venue.module';
import { TeamsdetailModule } from './teamsdetail/teamsdetail.module';
import { MatchesModule } from './matches/matches.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ResultModule } from './result/result.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CountriesModule,
    MatCardModule,
    TeamsdetailModule,
    VenueModule,
    MatchesModule,
    ResultModule,
    LeaderboardModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
