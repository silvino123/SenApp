import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoSalud } from '../../app/models/Letras';
//import {DOCUMENT}from '@angular/common';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the JuegoColoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegosalud',
  templateUrl: 'juegosalud.html',
})
export class JuegoSaludPage  implements OnInit{
  public  SaludArray:JuegoSalud[]=[];
  public activarSalud:JuegoSalud;
  public n10: number = 0;
  public vidas:number=3;
   respuesta:any;
   Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage ) {
    this.respuesta= false;
    
    this.activarSalud={
    "salud":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoSalud.json').subscribe((res:any)=>{
      this.SaludArray=res.SaludArray;
      this.load();
    
     
    });
 
  }
  load(){
   if(this.SaludArray.length>0){
      
    
       let selectSalud= Math.floor(Math.random()* this.SaludArray.length);
      
      this.activarSalud= this.SaludArray[selectSalud];
      this.n10  = this.n10 + 1;
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
    if(this.SaludArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarSalud.salud){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectSalud= Math.floor(Math.random()* this.SaludArray.length);
        
        this.activarSalud= this.SaludArray[selectSalud];
        this.respuesta= false;
        this.n10  = this.n10 + 1;
      }
      else{
        const toast = this.toastCtrl.create({
          message: 'Respuesta Incorrecta' ,
          duration: 800,
          position:'top'
        });
        toast.present();
        
        this.vidas  = this.vidas-1;
        this.respuesta= false;
        let selectSalud= Math.floor(Math.random()* this.SaludArray.length);
        
        this.activarSalud= this.SaludArray[selectSalud];
      }
      if(this.n10>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        
this.Categoria = true;
        alert.present();
        this.navCtrl.setRoot(ListPage,{n10:this.n10-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(ListPage,{n10:this.n10});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('SALUD', this.Categoria); 
  }

}