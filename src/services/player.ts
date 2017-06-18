import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Player } from '../models/player';
import { Http, Response } from '@angular/http';



@Injectable()
export class PlayerService{

    private player: Player[]=[];

    constructor(){}

    addPlayer(name: string, position: string){
        this.player.push(new Player(name, position));
    }

    getPlayers(){
        return this.player.slice();
    }

    updatePlayer(index:number, name:string, position:string){
        this.player[index] = new Player(name, position);
    }

    removePlayer(index:number){
        this.player.splice(index, 1);
    }
} 