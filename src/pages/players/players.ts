import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';

import { AddplayerPage } from '../addplayer/addplayer';
import { Player } from '../../models/player';
import { PlayerInt } from '../../data/player';

import { PlayerService } from '../../services/player';
import { PlayerPage } from '../player/player';
import { TeamService } from '../../services/team';

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  players: Player[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService,
              private modalCtrl: ModalController, private alertCtrl: AlertController, private teamService: TeamService,
              private toastCtrl: ToastController) {
  }

  ionViewWillEnter(){
    this.players = this.playerService.getPlayers();
  }

  onNewPlayer(){
    this.navCtrl.push(AddplayerPage,{mode: 'Add'});
  }

  onAddPlayer(selectedPlayer: PlayerInt){
    const alert = this.alertCtrl.create({
      title: 'Add Player',
      message: 'Please confirm you are adding this player to your team',
      buttons:[
        {
          text:'Add Player',
          handler:()=>{
            this.teamService.onAddPlayerToTeam(selectedPlayer);
            const toast = this.toastCtrl.create({
              message: 'Player was successfully added to your team',
              duration: 3000,
              position: 'bottom'
            })
            toast.present();
            console.log(selectedPlayer);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancelled clicked');
          }
        }
        ]
     });
     alert.present();
  }

  onDeletePlayer(selected){}

  onLoadPlayers(player: Player, index:number){
       this.navCtrl.push(PlayerPage, {player:player, index:index});  
  }



  

}
