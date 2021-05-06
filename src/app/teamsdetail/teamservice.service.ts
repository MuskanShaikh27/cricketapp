import { Injectable } from '@angular/core';
import { Players, Teams } from './teamsPlayers';
import { PLAYERS, TEAMS } from './mock_play_team_data';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  constructor() { }

  getTeams(): Observable<Teams[]> {
    return of(TEAMS);
  }

  getPlayers(id: number): Observable<Players[]> {
    return of(PLAYERS.filter( player => player.tid === id ));
  }

  getPlayerInfo(id: number): Observable<Players> {
    return of(PLAYERS.find( player => player.pid == id));
  }
}
