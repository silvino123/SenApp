import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AbcPage}from '../../pages/abc/abc';
import {NumerosPage}from '../../pages/numeros/numeros';
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
}
