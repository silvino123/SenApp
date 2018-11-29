import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {JuegoAbcPage} from '../../pages/juego-abc/juego-abc';
import {JuegonumerosPage} from '../../pages/juegonumeros/juegonumeros';
import {JuegoColoresPage} from '../../pages/juego-colores/juego-colores';
import {JuegotiempoPage} from '../../pages/juegotiempo/juegotiempo';
import{JuegoprofesionesPage} from '../../pages/juegoprofesiones/juegoprofesiones';
import {ExamenPage} from '../../pages/examen/examen';
//import { from } from 'rxjs';
//import { NumerosPage } from '../numeros/numeros';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public n: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.n = navParams.get('n');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  redirectJuegoAbc(){
this.navCtrl.setRoot(JuegoAbcPage);
  }
  redirectJuegoNumeros(){
    this.navCtrl.setRoot(JuegonumerosPage);
      }
      redirectJuegoColores(){
        this.navCtrl.setRoot(JuegoColoresPage);
      }
      redirectJuegoTiempo(){
        this.navCtrl.setRoot(JuegotiempoPage);
      }
      redirectJuegoProfesiones(){
        this.navCtrl.setRoot(JuegoprofesionesPage);
      }
      redirectJuegoExamen(){
        this.navCtrl.setRoot(ExamenPage);
      }
}
