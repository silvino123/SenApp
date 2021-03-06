import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoColores } from '../../app/models/Letras';
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
  selector: 'page-juego-colores',
  templateUrl: 'juego-colores.html',
})
export class JuegoColoresPage  implements OnInit{
  public  ColoresArray:JuegoColores[]=[];
  public activarColor:JuegoColores;
  public n3: number = 0;
  public vidas:number=3;
   respuesta:any;
   Categoria: Boolean; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage ) {
    this.respuesta= false;
    
    this.activarColor={
    "Color":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoColores.json').subscribe((res:any)=>{
      this.ColoresArray=res.ColoresArray;
      this.load();
    
     
    });
 
  }
  load(){
   if(this.ColoresArray.length>0){
      
    
       let selectColor= Math.floor(Math.random()* this.ColoresArray.length);
      
      this.activarColor= this.ColoresArray[selectColor];
      this.n3  = this.n3 + 1;
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
    if(this.ColoresArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarColor.Color){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectLetra= Math.floor(Math.random()* this.ColoresArray.length);
        
        this.activarColor= this.ColoresArray[selectLetra];
        this.respuesta= false;
        this.n3  = this.n3 + 1;
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
        let selectLetra= Math.floor(Math.random()* this.ColoresArray.length);
        
        this.activarColor= this.ColoresArray[selectLetra];
      }
      if(this.n3>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        this.Categoria = true;
        this.n3 = this.n3-1;
        this.saveData();
        this.intentos(); 
        alert.present();
        this.navCtrl.setRoot(ListPage,{n3:this.n3});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n3:this.n3});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('COLORES', this.Categoria);
    
    
  }
  intentos()
  {
    this.storage.set('IntentosCol', this.n3);
    
    
  }
}
