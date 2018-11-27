import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfesionesPage } from './profesiones';

@NgModule({
  declarations: [
    ProfesionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfesionesPage),
  ],
})
export class ProfesionesPageModule {}
