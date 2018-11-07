import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoAbcPage } from './juego-abc';

@NgModule({
  declarations: [
    JuegoAbcPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoAbcPage),
  ],
})
export class JuegoAbcPageModule {}
