import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Matches } from '../match';
import { MatchserviceService } from '../matchservice.service';
@Component({
  selector: 'app-matchsummary',
  templateUrl: './matchsummary.component.html',
  styleUrls: ['./matchsummary.component.css']
})
export class MatchsummaryComponent implements OnInit {
  matchDetails: Matches[];
  // id :number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private mtchService: MatchserviceService) { }

  ngOnInit() {
    this.getMatches();
    console.log(this.matchDetails);
  }
  getMatches(): void {
    this.mtchService.getMatches().subscribe(match => this.matchDetails = match);
  }
}
