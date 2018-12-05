import { Component,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoTiempo } from '../../app/models/Letras';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the JuegotiempoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegotiempo',
  templateUrl: 'juegotiempo.html',
})
export class JuegotiempoPage implements OnInit {
  public  tiemposArray:JuegoTiempo[]=[];
  public activartiempo:JuegoTiempo;
  public n6: number = 0;
  public vidas:number=3;
  Categoria: Boolean;
   respuesta:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage) {
    this.respuesta= false;
    
    this.activartiempo={
    "tiempo":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }

  ngOnInit(){
    this.http.get('assets/JuegoTiempos.json').subscribe((res:any)=>{
      this.tiemposArray=res.tiemposArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.tiemposArray.length>0){
       
     
        let selectiempo= Math.floor(Math.random()* this.tiemposArray.length);
       
       this.activartiempo= this.tiemposArray[selectiempo];
       this.n6  = this.n6 + 1;
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
    if(this.tiemposArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activartiempo.tiempo){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectiempo= Math.floor(Math.random()* this.tiemposArray.length);
        
        this.activartiempo= this.tiemposArray[selectiempo];
        this.respuesta= false;
        this.n6  = this.n6 + 1;
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
        let selectiempo= Math.floor(Math.random()* this.tiemposArray.length);
        
        this.activartiempo= this.tiemposArray[selectiempo];
      }
      if(this.n6>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        this.Categoria = true;

        alert.present();
        this.navCtrl.setRoot(ListPage,{n6:this.n6-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        
this.navCtrl.setRoot(ListPage,{n6:this.n6});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('TIEMPOS', this.Categoria);
    
    
  }
}
