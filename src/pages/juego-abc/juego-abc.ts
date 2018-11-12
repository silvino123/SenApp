import { Component ,Inject,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoLetras } from '../../app/models/Letras';
import {DOCUMENT}from '@angular/common';
import{DomController  } from'@ionic/angular'
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
  
  constructor(private domCtrl:DomController, public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private http:HttpClient,@Inject(DOCUMENT) private document) {
  }

  
  ngOnInit(){
    this.http.get('assets/JuegoLetras.json').subscribe((res:any)=>{
      this.LetrasArray=res.LetrasArray;
      this.siguiente();
    });
  }
  siguiente() {
    if(this.LetrasArray.length>0){

      let selectLetra= Math.floor(Math.random()* this.LetrasArray.length);
      this.activarLetras= this.LetrasArray[selectLetra];
     
    
    }
   
  }

}
