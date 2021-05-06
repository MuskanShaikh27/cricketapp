import { Component, OnInit } from '@angular/core';
import { Teams, Players } from '../teamsPlayers';
import { TeamserviceService } from '../teamservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Teams[];
  players: Players[];
  selectedTeamId : number;
  openlist: boolean = false;

  constructor(private teamService: TeamserviceService) { }

  ngOnInit() {
    this.getTeamsInfo();
  }

  getTeamsInfo(): void {
    this.teamService.getTeams()
                    .subscribe(team => this.teams = team);
  }

  getPlayers(): void {
    this.teamService.getPlayers(this.selectedTeamId)
                    .subscribe(player => this.players = player);
                    

  } 

  selected(id){
    console.log(id);

    if(this.openlist == true) {
      this.players.length = 0;
      this.openlist = false;
    }else {
    this.openlist = true;
    this.selectedTeamId = id;
    this.getPlayers();
  
    }
  }
}
