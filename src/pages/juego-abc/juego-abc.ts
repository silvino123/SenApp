import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the JuegoAbcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juego-abc',
  templateUrl: 'juego-abc.html',
})
export class JuegoAbcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegoAbcPage');
  }
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Respuesta correcta !!',
      duration: 1000,
      position: position
      
    });

    toast.present(toast);
  }

}
