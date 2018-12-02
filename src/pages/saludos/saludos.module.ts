import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaludosPage } from './saludos';

@NgModule({
  declarations: [
    SaludosPage,
  ],
  imports: [
    IonicPageModule.forChild(SaludosPage),
  ],
})
export class SaludosPageModule {}
