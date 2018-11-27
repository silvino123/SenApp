import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TiempoPage} from '../../pages/tiempo/tiempo';
import { Mes } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
import{EstacionesPage} from '../../pages/estaciones/estaciones';
import {HoraPage} from '../../pages/hora/hora';
/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage implements OnInit {
  MesArray:Mes[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }

  ngOnInit(){
    this.http.get('assets/Mes.json').subscribe((res:any)=>{
      this.MesArray=res.MesArray;
    });
  }
  redirecDias(){
  this.navCtrl.setRoot(TiempoPage);
  }
  redirecEstaciones(){

    this.navCtrl.setRoot(EstacionesPage);
   }
   redirecHoras(){
    this.navCtrl.setRoot(HoraPage);
   }
}
