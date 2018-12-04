import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoVerbos } from '../../app/models/Letras';
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
  selector: 'page-juegoverbos',
  templateUrl: 'juegoverbos.html',
})
export class JuegoVerbosPage implements OnInit {
  public  VerbosArray:JuegoVerbos[]=[];
  public activarVerbos:JuegoVerbos;
  public n: number = 0;
  public vidas:number=3;
   respuesta:any;
   Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController
    , private storage: Storage) {
    this.respuesta= false;
    
    this.activarVerbos={
    "verbo":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""

   }
  }
  ngOnInit(){
    this.http.get('assets/JuegoVerbos.json').subscribe((res:any)=>{
      this.VerbosArray=res.VerbosArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.VerbosArray.length>0){
       
     
        let selectVerbo= Math.floor(Math.random()* this.VerbosArray.length);
       
       this.activarVerbos= this.VerbosArray[selectVerbo];
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
    if(this.VerbosArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarVerbos.verbo){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectVerbo= Math.floor(Math.random()* this.VerbosArray.length);
        
        this.activarVerbos= this.VerbosArray[selectVerbo];
        this.respuesta= false;
        this.n  = this.n + 1;
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
        let selectVerbo= Math.floor(Math.random()* this.VerbosArray.length);
        
        this.activarVerbos= this.VerbosArray[selectVerbo];
      }
      if(this.n>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        
this.Categoria = true;
        alert.present();
        this.navCtrl.setRoot(ListPage);
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(ListPage);
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('VERBOS', this.Categoria);
    
    
  }
}
