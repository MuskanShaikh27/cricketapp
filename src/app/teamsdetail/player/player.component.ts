import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Players } from '../teamsPlayers';
import { TeamserviceService } from '../teamservice.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerInfo: Players;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playerService: TeamserviceService) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer(): void {
    const playerId = +this.route.snapshot.params['pid'];
    this.playerService.getPlayerInfo(playerId)
                      .subscribe(player => this.playerInfo = player);
  }

}
