import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiempoPage } from './tiempo';

@NgModule({
  declarations: [
    TiempoPage,
  ],
  imports: [
    IonicPageModule.forChild(TiempoPage),
  ],
})
export class TiempoPageModule {}
