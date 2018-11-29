import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SentimientosPage } from './sentimientos';

@NgModule({
  declarations: [
    SentimientosPage,
  ],
  imports: [
    IonicPageModule.forChild(SentimientosPage),
  ],
})
export class SentimientosPageModule {}
