import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddplayerPage } from './addplayer';

@NgModule({
  declarations: [
    AddplayerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddplayerPage),
  ],
  exports: [
    AddplayerPage
  ]
})
export class AddplayerPageModule {}
