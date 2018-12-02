import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegosaludosPage } from './juegosaludos';

@NgModule({
  declarations: [
    JuegosaludosPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegosaludosPage),
  ],
})
export class JuegosaludosPageModule {}
