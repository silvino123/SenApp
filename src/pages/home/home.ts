import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AbcPage}from '../../pages/abc/abc';
import {NumerosPage}from '../../pages/numeros/numeros';
import{ColoresPage}from '../../pages/colores/colores';
import { TiempoPage } from '../../pages/tiempo/tiempo';
import {ProfesionesPage} from '../../pages/profesiones/profesiones';
import { SaludosPage } from '../saludos/saludos';
import { FamiliaPage } from '../familia/familia';
import { SentimientosPage } from '../sentimientos/sentimientos';
import { VerbosPage } from '../verbos/verbos';
import { SaludPage } from '../salud/salud';
//import { from } from 'rxjs';
//import { from } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  redirectabc(){
   this.navCtrl.setRoot(AbcPage);
  }
  redirectnumeros(){
    this.navCtrl.setRoot(NumerosPage);
   }
   redirecColores()
   {
    this.navCtrl.setRoot(ColoresPage);
   }
   redirecTiempo(){
    this.navCtrl.setRoot(TiempoPage);
   }
   redirecProfesion(){
    this.navCtrl.setRoot(ProfesionesPage);
   }
   redirecSaludos(){
    this.navCtrl.setRoot(SaludosPage);
   }
   redirecFamilia(){
    this.navCtrl.setRoot(FamiliaPage);
   }
   redirecSentimientos(){
    this.navCtrl.setRoot(SentimientosPage);
   }
   redirecVerbos(){
    this.navCtrl.setRoot(VerbosPage);
   }
   redirecSalud(){
    this.navCtrl.setRoot(SaludPage);
   }
}
