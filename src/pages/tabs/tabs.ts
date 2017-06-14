import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { TeamPage } from '../team/team';
import { GamePage } from '../game/game';
import { PlayersPage } from '../players/players'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GamePage;
  tab2Root = TeamPage;
  tab3Root = GamesPage;
  tab4Root = PlayersPage;

  constructor() {

  }
}
