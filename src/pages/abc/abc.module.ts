import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbcPage } from './abc';

@NgModule({
  declarations: [
    AbcPage,
  ],
  imports: [
    IonicPageModule.forChild(AbcPage),
  ],
})
export class AbcPageModule {}
