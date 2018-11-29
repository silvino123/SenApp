import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerbosPage } from './verbos';

@NgModule({
  declarations: [
    VerbosPage,
  ],
  imports: [
    IonicPageModule.forChild(VerbosPage),
  ],
})
export class VerbosPageModule {}
