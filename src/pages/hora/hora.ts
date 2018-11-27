import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Hora } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
import{EstacionesPage} from '../../pages/estaciones/estaciones';
import{MesesPage} from '../../pages/meses/meses';
import {TiempoPage} from '../../pages/tiempo/tiempo';
/**
 * Generated class for the HoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hora',
  templateUrl: 'hora.html',
})
export class HoraPage implements OnInit {
  HoraArray:Hora[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }

  ngOnInit(){
    this.http.get('assets/Hora.json').subscribe((res:any)=>{
      this.HoraArray=res.HoraArray;
    });
  }
  redirecEstaciones(){

    this.navCtrl.setRoot(EstacionesPage);
   }
   redirecMeses(){
    this.navCtrl.setRoot(MesesPage);
  }
  redirecDias(){
    this.navCtrl.setRoot(TiempoPage);
    }

}
