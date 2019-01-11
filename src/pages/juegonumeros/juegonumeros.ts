import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoNumeros } from '../../app/models/Letras';
//import {DOCUMENT}from '@angular/common';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';

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
  public n2: number = 0;
  public vidas:number=3;
   respuesta:any;
  

  Categoria: Boolean; 
  

  constructor(public  alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private http:HttpClient, private storage: Storage) {
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
       this.n2  = this.n2 + 1;
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
        duration: 800,
        position:'top'
      });
      toast.present();
      let selectNumero= Math.floor(Math.random()* this.NumerosArray.length);
      
      this.activarNumeros= this.NumerosArray[selectNumero];
      this.respuesta= false;
      this.n2  = this.n2 + 1;
    }
    else{
      const toast = this.toastCtrl.create({
        message: 'Respuesta Incorrecta',
        duration: 800,
        position:'top'
      });
      toast.present();
      
      this.vidas  = this.vidas-1;
      this.respuesta= false;
      let selectNumero= Math.floor(Math.random()* this.NumerosArray.length);
      
      this.activarNumeros= this.NumerosArray[selectNumero];
    }
    if(this.n2>10 && this.vidas!=0){
      const alert = this.alertCtrl.create({
        title: 'Categoria Completada!',
        subTitle: '',
        buttons: ['OK']
      });
      this.Categoria = true;
      this.n2 = this.n2-1;
      this.saveData();
      this.intentos(); 
      alert.present();
      this.navCtrl.setRoot(ListPage,{n2:this.n2});
    }
    if(this.vidas==0){
      const alert = this.alertCtrl.create({
        title: 'Se terminaron los intentos!',
        subTitle: 'Categoria no completada',
        buttons: ['OK']
      });
      this.intentos();
      alert.present();
      this.navCtrl.setRoot(ListPage,{n2:this.n2});
    }
  }
}
 
}

saveData()
  {
    this.storage.set('NUMEROS', this.Categoria);
    
    
  }
  intentos()
  {
    this.storage.set('IntentosNum', this.n2);
    
    
  }

}
