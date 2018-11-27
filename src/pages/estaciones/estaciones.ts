import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TiempoPage} from '../../pages/tiempo/tiempo';
import {  Estaciones } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
import{MesesPage} from'../../pages/meses/meses';
import {HoraPage}from '../../pages/hora/hora';
/**
 * Generated class for the EstacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estaciones',
  templateUrl: 'estaciones.html',
})
export class EstacionesPage implements OnInit {
  EsArray:Estaciones[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/Es.json').subscribe((res:any)=>{
      this.EsArray=res.EsArray;
    });
  }
  redirecDias(){
  this.navCtrl.setRoot(TiempoPage);
  }
  redirecMeses(){
    this.navCtrl.setRoot(MesesPage);
  }
  redirecHoras(){
    this.navCtrl.setRoot(HoraPage);
  }

}
