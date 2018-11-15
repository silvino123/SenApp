import { Component ,Inject,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoNumeros } from '../../app/models/Letras';
import {DOCUMENT}from '@angular/common';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
/**
 * Generated class for the JuegonumerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegonumeros',
  templateUrl: 'juegonumeros.html',
})
export class JuegonumerosPage implements OnInit {
  public  NumerosArray:JuegoNumeros[]=[];
  public activarNumeros:JuegoNumeros;
  public n: number = 0;
  public vidas:number=3;
   respuesta:any;
  constructor(public  alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private http:HttpClient,@Inject(DOCUMENT) private document) {
    this.respuesta= false;
    
    this.activarNumeros={
    "numero":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoNumeros.json').subscribe((res:any)=>{
      this.NumerosArray=res.NumerosArray;
      this.load();
    
     
    });
 
  }
  load(){
    if(this.NumerosArray.length>0){
       
     
        let selectNumero= Math.floor(Math.random()* this.NumerosArray.length);
       
       this.activarNumeros= this.NumerosArray[selectNumero];
       this.n  = this.n + 1;
       this.vidas  = this.vidas;
      
    }

}
siguiente() {
  if(this.respuesta== false){
    const alert = this.alertCtrl.create({
      title: 'Seleccina una opcion!',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  else{
  if(this.NumerosArray.length>0){
    
 
   
    this.vidas  = this.vidas;
    if(this.respuesta==this.activarNumeros.numero){
      const toast = this.toastCtrl.create({
        message: 'Respuesta Correcta',
        duration: 600,
        position:'top'
      });
      toast.present();
      let selectNumero= Math.floor(Math.random()* this.NumerosArray.length);
      
      this.activarNumeros= this.NumerosArray[selectNumero];
      this.respuesta= false;
      this.n  = this.n + 1;
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Respuesta Incorrecta',
        duration: 600,
        position:'top'
      });
      toast.present();
      
      this.vidas  = this.vidas-1;
      this.respuesta= false;
      let selectNumero= Math.floor(Math.random()* this.NumerosArray.length);
      
      this.activarNumeros= this.NumerosArray[selectNumero];
    }
    if(this.n>10 && this.vidas!=0){
      const alert = this.alertCtrl.create({
        title: 'Categoria Completada!',
        subTitle: '',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(ListPage);
    }
    if(this.vidas==0){
      const alert = this.alertCtrl.create({
        title: 'Se terminaron los intentos!',
        subTitle: 'Categoria no completada',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(ListPage);
    }
  }
}
 
}


}
