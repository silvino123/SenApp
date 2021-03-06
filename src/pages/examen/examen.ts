import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Examen } from '../../app/models/Letras';
//import {DOCUMENT}from '@angular/common';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ExamenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examen',
  templateUrl: 'examen.html',
})
export class ExamenPage implements OnInit {
  public  ExamenArray:Examen[]=[];
  public activarPalabra:Examen;
  public n11: number = 0;
  public vidas:number=3;
   respuesta:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public  alertCtrl:AlertController,public toastCtrl: ToastController,private http:HttpClient,private storage: Storage) {
    this.respuesta= false;
    
    this.activarPalabra={
    "palabra":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }

  ngOnInit(){
    this.http.get('assets/Examen.json').subscribe((res:any)=>{
      this.ExamenArray=res.ExamenArray;
      this.load();
    
     
    });
 
  }
  load(){
    if(this.ExamenArray.length>0){
       
     
        let selectLetra= Math.floor(Math.random()* this.ExamenArray.length);
       
       this.activarPalabra= this.ExamenArray[selectLetra];
       this.n11  = this.n11 + 1;
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
    if(this.ExamenArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarPalabra.palabra){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectLetra= Math.floor(Math.random()* this.ExamenArray.length);
        
        this.activarPalabra= this.ExamenArray[selectLetra];
        this.respuesta= false;
        this.n11  = this.n11 + 1;
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
        let selectLetra= Math.floor(Math.random()* this.ExamenArray.length);
        
        this.activarPalabra= this.ExamenArray[selectLetra];
      }
      if(this.n11>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Examen Completado!',
          subTitle: '',
          buttons: ['OK']
        });
        this.n11 = this.n11-1;
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n11:this.n11});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Examen no Completado',
          buttons: ['OK']
        });
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n11:this.n11});
      }
    }
  }
   
  }
  intentos()
  {
    this.storage.set('IntentosExa', this.n11);
    
    
  }
}
