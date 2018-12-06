import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoSaludos } from '../../app/models/Letras';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the JuegosaludosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegosaludos',
  templateUrl: 'juegosaludos.html',
})
export class JuegosaludosPage implements OnInit {

  public  SaludosArray:JuegoSaludos[]=[];
  public activarSaludos:JuegoSaludos;
  public n4: number = 0;
  public vidas:number=3;
   respuesta:any;
   Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage) {
    this.respuesta= false;
    
    this.activarSaludos={
    "Saludo":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""
    }
  }
  ngOnInit(){
    this.http.get('assets/JuegoSaludos.json').subscribe((res:any)=>{
      this.SaludosArray=res.SaludosArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.SaludosArray.length>0){
       
     
        let selectPro= Math.floor(Math.random()* this.SaludosArray.length);
       
       this.activarSaludos= this.SaludosArray[selectPro];
       this.n4  = this.n4 + 1;
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
    if(this.SaludosArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarSaludos.Saludo){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectPro= Math.floor(Math.random()* this.SaludosArray.length);
        
        this.activarSaludos= this.SaludosArray[selectPro];
        this.respuesta= false;
        this.n4  = this.n4 + 1;
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
        let selectPro= Math.floor(Math.random()* this.SaludosArray.length);
        
        this.activarSaludos= this.SaludosArray[selectPro];
      }
      if(this.n4>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        this.Categoria = true;
        this.saveData(); 
        alert.present();
        this.navCtrl.setRoot(ListPage,{n4:this.n4-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        
this.navCtrl.setRoot(ListPage,{n4:this.n4})
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('SALUDOS', this.Categoria);
    
    
  }

}


