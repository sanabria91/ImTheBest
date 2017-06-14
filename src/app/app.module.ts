import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddplayerPage } from '../pages/addplayer/addplayer';
import { CreateteamPage } from '../pages/createteam/createteam';
import { GamePage } from '../pages/game/game';
import { GamesPage } from '../pages/games/games';
import { PlayerPage } from '../pages/player/player';
import { PlayersPage } from '../pages/players/players';
import { TeamPage } from '../pages/team/team';
import { TeamsPage } from '../pages/teams/teams';

import { PlayerService } from '../services/player';
import { TeamService } from '../services/team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AddplayerPage,
    CreateteamPage,
    GamePage,
    GamesPage,
    PlayersPage,
    PlayerPage, 
    TeamPage,
    TeamsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AddplayerPage,
    CreateteamPage,
    GamePage,
    GamesPage,
    PlayersPage,
    PlayerPage, 
    TeamPage,
    TeamsPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerService,
    TeamService
  ]
})
export class AppModule {}
