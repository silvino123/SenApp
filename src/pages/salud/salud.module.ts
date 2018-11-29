import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaludPage } from './salud';

@NgModule({
  declarations: [
    SaludPage,
  ],
  imports: [
    IonicPageModule.forChild(SaludPage),
  ],
})
export class SaludPageModule {}
