import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Dias } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
import{EstacionesPage} from '../../pages/estaciones/estaciones';
import{MesesPage} from '../../pages/meses/meses';
import {HoraPage} from '../../pages/hora/hora';

/**
 * Generated class for the TiempoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tiempo',
  templateUrl: 'tiempo.html',
})
export class TiempoPage implements OnInit {
  DiasArray:Dias[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/Dias.json').subscribe((res:any)=>{
      this.DiasArray=res.DiasArray;
    });
  }

  redirecEstaciones(){

   this.navCtrl.setRoot(EstacionesPage);
  }
  redirecMeses(){
    this.navCtrl.setRoot(MesesPage);
  }
  redirecHoras(){
    this.navCtrl.setRoot(HoraPage);
  }
}
