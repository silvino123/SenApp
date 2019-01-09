import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoProfesion } from '../../app/models/Letras';
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
  selector: 'page-juegoprofesiones',
  templateUrl: 'juegoprofesiones.html',
})
export class JuegoprofesionesPage implements OnInit {
  public  ProfesionArray:JuegoProfesion[]=[];
  public activarProfesion:JuegoProfesion;
  public n7: number = 0;
  public vidas:number=3; 
   respuesta:any;
   Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController
    , private storage: Storage) {
    this.respuesta= false;
    
    this.activarProfesion={
    "profesion":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoProfesion.json').subscribe((res:any)=>{
      this.ProfesionArray=res.ProfesionArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.ProfesionArray.length>0){
       
     
        let selectPro= Math.floor(Math.random()* this.ProfesionArray.length);
       
       this.activarProfesion= this.ProfesionArray[selectPro];
       this.n7  = this.n7 + 1;
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
    if(this.ProfesionArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarProfesion.profesion){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectPro= Math.floor(Math.random()* this.ProfesionArray.length);
        
        this.activarProfesion= this.ProfesionArray[selectPro];
        this.respuesta= false;
        this.n7  = this.n7 + 1;
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
        let selectPro= Math.floor(Math.random()* this.ProfesionArray.length);
        
        this.activarProfesion= this.ProfesionArray[selectPro];
      }
      if(this.n7>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        this.Categoria = true;
        this.saveData(); 
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n7:this.n7-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        this.intentos();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n7:this.n7});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('PROFESIONES', this.Categoria);
    
    
  }
  intentos()
  {
    this.storage.set('IntentosP', this.n7);
    
    
  }
}
