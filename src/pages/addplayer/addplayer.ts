import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Player } from '../../models/player';
import { PlayerService } from '../../services/player';
import { PlayersPage } from '../players/players'

import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-addplayer',
  templateUrl: 'addplayer.html',
})

export class AddplayerPage implements OnInit {

  mode= 'Add';
  selectOption = ['1st','2nd','3rd','SS','LF','CF','RF','C'];
  playerForm: FormGroup;
  index: number;
  player: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService) {
  }

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    if(this.mode == 'Edit'){
      this.player = this.navParams.get('player');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  private initializeForm(){
    let name = null;
    let position = null;

    this.playerForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'position': new FormControl(position, Validators.required)
    });
  }

  onSubmit(){
    const value = this.playerForm.value;
    if(this.mode == 'Edit'){
      this.playerService.updatePlayer(this.index,value.name,value.position);
    }else{
      this.playerService.addPlayer(value.name, value.position);
    }
    this.playerForm.reset();
    this.navCtrl.push(PlayersPage);
  }




}
