import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Player } from '../models/player';
import { PlayerInt } from '../data/player';
import { Team } from '../models/team';
import { Http, Response } from '@angular/http';

@Injectable()
export class TeamService{

    private team = [];

    onAddPlayerToTeam(player: PlayerInt){
         this.team.push(player);
    }

    getPlayersFromTeam(){
        return this.team.slice();
    }
}
