import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamiliaPage } from './familia';

@NgModule({
  declarations: [
    FamiliaPage,
  ],
  imports: [
    IonicPageModule.forChild(FamiliaPage),
  ],
})
export class FamiliaPageModule {}
