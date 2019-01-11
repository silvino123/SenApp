import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoSentimientos } from '../../app/models/Letras';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the JuegoprofesionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegosentimientos',
  templateUrl: 'juegosentimientos.html',
})
export class JuegoSentimientosPage implements OnInit {
  public  SentimientosArray:JuegoSentimientos[]=[];
  public activarSentimiento:JuegoSentimientos;
  public n8: number = 0;
  public vidas:number=3;
   respuesta:any;
   Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage) {
    this.respuesta= false;
    
    this.activarSentimiento={
    "sentimiento":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":"" 

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoSentimientos.json').subscribe((res:any)=>{
      this.SentimientosArray=res.SentimientosArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.SentimientosArray.length>0){
       
     
        let selectSent= Math.floor(Math.random()* this.SentimientosArray.length);
       
       this.activarSentimiento= this.SentimientosArray[selectSent];
       this.n8  = this.n8 + 1;
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
    if(this.SentimientosArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarSentimiento.sentimiento){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectSent= Math.floor(Math.random()* this.SentimientosArray.length);
        
        this.activarSentimiento= this.SentimientosArray[selectSent];
        this.respuesta= false;
        this.n8  = this.n8 + 1;
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
        let selectSent= Math.floor(Math.random()* this.SentimientosArray.length);
        
        this.activarSentimiento= this.SentimientosArray[selectSent];
      }
      if(this.n8>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        this.Categoria = true; 
        this.n8 = this.n8-1;
        this.saveData();
        this.intentos(); 
        alert.present();
        this.navCtrl.setRoot(ListPage,{n8:this.n8});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n8:this.n8});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('SENTIMIENTOS', this.Categoria);
    
    
  }
  intentos()
  {
    this.storage.set('IntentosSen', this.n8);
    
    
  }

 
}
