import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoFamiliaPage } from './juego-familia';

@NgModule({
  declarations: [
    JuegoFamiliaPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoFamiliaPage),
  ],
})
export class JuegoFamiliaPageModule {}
