import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { JuegoFamilia } from '../../app/models/Letras';
import { AlertController } from 'ionic-angular';
import{ListPage} from '../../pages/list/list';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the JuegoFamiliaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juego-familia',
  templateUrl: 'juego-familia.html',
})
export class JuegoFamiliaPage implements OnInit {
  public  FamiliaArray:JuegoFamilia[]=[];
  public activarFamilia:JuegoFamilia;
  public n5: number = 0;
  public vidas:number=3;
   respuesta:any;
   
Categoria: Boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public alertCtrl:AlertController, public toastCtrl:ToastController, private storage: Storage) {
    this.respuesta= false;
    
    this.activarFamilia={
    "familiar":"",
    "imagen":"",
    "respuesta1":"",
    "respuesta2":"",
    "respuesta3":""
    }
  }

  ngOnInit(){
    this.http.get('assets/JuegoFamilia.json').subscribe((res:any)=>{
      this.FamiliaArray=res.FamiliaArray;
      this.load();
  
    });
 
  }
  load(){
    if(this.FamiliaArray.length>0){
       
     
        let selectPro= Math.floor(Math.random()* this.FamiliaArray.length);
       
       this.activarFamilia= this.FamiliaArray[selectPro];
       this.n5  = this.n5 + 1;
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
    if(this.FamiliaArray.length>0){
      
   
     
      this.vidas  = this.vidas;
      if(this.respuesta==this.activarFamilia.familiar){
        const toast = this.toastCtrl.create({
          message: 'Respuesta Correcta',
          duration: 800,
          position:'top'
        });
        toast.present();
        let selectPro= Math.floor(Math.random()* this.FamiliaArray.length);
        
        this.activarFamilia= this.FamiliaArray[selectPro];
        this.respuesta= false;
        this.n5  = this.n5 + 1;
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
        let selectPro= Math.floor(Math.random()* this.FamiliaArray.length);
        
        this.activarFamilia= this.FamiliaArray[selectPro];
      }
      if(this.n5>10 && this.vidas!=0){
        const alert = this.alertCtrl.create({
          title: 'Categoria Completada!',
          subTitle: '',
          buttons: ['OK']
        });
        
this.Categoria = true;
this.saveData();
        alert.present();
        this.navCtrl.setRoot(ListPage,{n5:this.n5-1});
      }
      if(this.vidas==0){
        const alert = this.alertCtrl.create({
          title: 'Se terminaron los intentos!',
          subTitle: 'Categoria no completada',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(ListPage,{n5:this.n5});
      }
    }
  }
   
  }
  saveData()
  {
    this.storage.set('FAMILIAS', this.Categoria);
  }
}





