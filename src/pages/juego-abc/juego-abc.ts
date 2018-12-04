import { Component ,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoLetras } from '../../app/models/Letras';
//import {DOCUMENT}from '@angular/common';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
//import { Observable } from 'rxjs';
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
export class JuegoAbcPage implements OnInit {
public  LetrasArray:JuegoLetras[]=[];
 public activarLetras:JuegoLetras;
 public n: number = 0;
 public vidas:number=3;
  respuesta:any;
Categoria: string; 
Puntuacion: number; 

 
 
  constructor(public  alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private http:HttpClient, private storage: Storage) {
  
    this.respuesta= false;
    
    this.activarLetras={
    "letra":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }

  
  ngOnInit(){
    this.http.get('assets/JuegoLetras.json').subscribe((res:any)=>{
      this.LetrasArray=res.LetrasArray;
      this.load();
    
     
    });
 
  }
  load(){
   if(this.LetrasArray.length>0){
      
    
       let selectLetra= Math.floor(Math.random()* this.LetrasArray.length);
      
      this.activarLetras= this.LetrasArray[selectLetra];
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
    if(this.LetrasArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarLetras.letra){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectLetra= Math.floor(Math.random()* this.LetrasArray.length);
        
        this.activarLetras= this.LetrasArray[selectLetra];
        this.respuesta= false;
        this.n  = this.n + 1;
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
        let selectLetra= Math.floor(Math.random()* this.LetrasArray.length);
        
        this.activarLetras= this.LetrasArray[selectLetra];
      }
      if(this.n>10 && this.vidas!=0){
       
        this.Categoria = 'ABC';
        this.Puntuacion = this.n; 

         const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK'],
          
        });
        
        this.saveData(); 
       
        alert.present();
        this.navCtrl.setRoot(ListPage,{n:this.n-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(ListPage,{n:this.n});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('ABC', this.Categoria);
    this.storage.set('ABCP', this.Puntuacion);
    
  }

  

}
