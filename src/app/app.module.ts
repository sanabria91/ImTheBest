import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; 
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { PlayerService } from '../services/player';
import { TeamService } from '../services/team';
import { AuthService } from '../services/auth'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyASn_JdXFLOrhFyFP2OtS8Pu9H5QccDo60",
    authDomain: "imthebest-2c816.firebaseapp.com",
    databaseURL: "https://imthebest-2c816.firebaseio.com",
    projectId: "imthebest-2c816",
    storageBucket: "imthebest-2c816.appspot.com",
    messagingSenderId: "298006434915"
  };

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
    TeamsPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    TeamsPage,
    SigninPage,
    SignupPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerService,
    TeamService,
    AuthService
  ]
})
export class AppModule {}
