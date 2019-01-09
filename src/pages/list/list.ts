import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {JuegoAbcPage} from '../../pages/juego-abc/juego-abc';
import {JuegonumerosPage} from '../../pages/juegonumeros/juegonumeros';
import {JuegoColoresPage} from '../../pages/juego-colores/juego-colores';
import {JuegotiempoPage} from '../../pages/juegotiempo/juegotiempo';
import{JuegoprofesionesPage} from '../../pages/juegoprofesiones/juegoprofesiones';
import {ExamenPage} from '../../pages/examen/examen';
import { JuegosaludosPage } from '../juegosaludos/juegosaludos';
import { JuegoFamiliaPage } from '../juego-familia/juego-familia';
import { JuegoSentimientosPage } from '../juegosentimientos/juegosentimientos';
import { JuegoVerbosPage } from '../juegoverbos/juegoverbos';
import { JuegoSaludPage } from '../juegosalud/juegosalud';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

//import { from } from 'rxjs';
//import { NumerosPage } from '../numeros/numeros';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public n: number=0;
  public n2: number=0;
  public n3: number=0;
  public n4: number=0;
  public n5: number=0;
  public n6: number=0;
  public n7: number=0;
  public n8: number=0;
  public n9: number=0;
  public n10: number=0;
  public n11: number=0;
  ValidacionC: boolean = false; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public  alertCtrl:AlertController,public toastCtrl: ToastController) {
    // this.n = navParams.get('n');
    // this.n2 = navParams.get('n2');
    // this.n3 = navParams.get('n3');
    // this.n4 = navParams.get('n4');
    // this.n5 = navParams.get('n5');
    // this.n6 = navParams.get('n6');
    // this.n7 = navParams.get('n7');
    // this.n8 = navParams.get('n8');
    // this.n9 = navParams.get('n9');
    // this.n10 = navParams.get('n10');
    // this.n11 = navParams.get('n11');
    console.log(this.n7);
    this.storagesdata()
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  

  redirectJuegoAbc(){
    this.navCtrl.setRoot(JuegoAbcPage);
  }

  redirectJuegoNumeros(){

    this.storage.get('ABC').then((val) => {
      this.ValidacionC = val;
      
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegonumerosPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }

    });

    
  }
 

  redirectJuegoColores(){
    this.storage.get('NUMEROS').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoColoresPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

  
    
  }
  redirectJuegoTiempo(){
    this.storage.get('FAMILIAS').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegotiempoPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

  
    
  }
  redirectJuegoProfesiones(){
    this.storage.get('TIEMPOS').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoprofesionesPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }
  redirectJuegoExamen(){
    this.storage.get('SALUD').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(ExamenPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }
  redirectJuegosaludos(){
    this.storage.get('COLORES').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegosaludosPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
   
  }
  redirectJuegofamilia(){
    this.storage.get('SALUDOS').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoFamiliaPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }
  redirectJuegoSentimientos(){
    this.storage.get('PROFESIONES').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoSentimientosPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }
  redirectJuegoVerbos(){
    this.storage.get('SENTIMIENTOS').then((val) => {
      this.ValidacionC = val;
      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoVerbosPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }
  redirectJuegoSalud(){
    this.storage.get('VERBOS').then((val) => {
      this.ValidacionC = val;

      if(this.ValidacionC == true )
      {  
        
        this.navCtrl.setRoot(JuegoSaludPage);
      }
      else 
      {
        const toast = this.toastCtrl.create({
          message: 'Categoria Bloqueada',
          duration: 2000,
          
  
        });
        toast.present();
          
        
      }
    });

    
    
  }

  storagesdata()
  {
    this.storage.get('IntentosP').then((val) => {
      this.n7 = val; 
    });
  }
  
 
}
