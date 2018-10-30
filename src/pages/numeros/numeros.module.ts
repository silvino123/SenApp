import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumerosPage } from './numeros';

@NgModule({
  declarations: [
    NumerosPage,
  ],
  imports: [
    IonicPageModule.forChild(NumerosPage),
  ],
})
export class NumerosPageModule {}
