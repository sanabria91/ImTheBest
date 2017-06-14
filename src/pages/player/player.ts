import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { AddplayerPage } from '../addplayer/addplayer';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player';
import { TeamService } from '../../services/team';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage implements OnInit {

  player: Player;
  index: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private playerService: PlayerService,
              private teamService: TeamService) {
  }

  ngOnInit(){
    this.player = this.navParams.get('player');
    this.index = this.navParams.get('index');
    console.log(this.player);
  }

  // onAddPlayerToTeam(){
  //    this.teamService.onAddPlayerToTeam(this.player);
  //    console.log('success');     
  // }


}
