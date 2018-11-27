import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoraPage } from './hora';

@NgModule({
  declarations: [
    HoraPage,
  ],
  imports: [
    IonicPageModule.forChild(HoraPage),
  ],
})
export class HoraPageModule {}
