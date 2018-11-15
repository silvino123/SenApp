import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoColoresPage } from './juego-colores';

@NgModule({
  declarations: [
    JuegoColoresPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoColoresPage),
  ],
})
export class JuegoColoresPageModule {}
