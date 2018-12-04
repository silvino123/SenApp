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

//import { from } from 'rxjs';
//import { NumerosPage } from '../numeros/numeros';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public n: number=0;
  ValidacionC: boolean = false; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public  alertCtrl:AlertController) {
    this.n = navParams.get('n');
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
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegonumerosPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
  }
 

  redirectJuegoColores(){
    this.storage.get('NUMEROS').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoColoresPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoTiempo(){
    this.storage.get('FAMILIA').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegotiempoPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoProfesiones(){
    this.storage.get('TIEMPOS').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoprofesionesPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoExamen(){
    this.storage.get('SALUD').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(ExamenPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegosaludos(){
    this.storage.get('COLORES').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegosaludosPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
   
  }
  redirectJuegofamilia(){
    this.storage.get('SALUDOS').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoFamiliaPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoSentimientos(){
    this.storage.get('PROFESIONES').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoSentimientosPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoVerbos(){
    this.storage.get('SENTIMIENTOS').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoVerbosPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  redirectJuegoSalud(){
    this.storage.get('VERBOS').then((val) => {
      this.ValidacionC = val;
    });

    if(this.ValidacionC == true )
    {  
      this.navCtrl.setRoot(JuegoSaludPage);
    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Categoria Bloqueada',
        subTitle: '',
        buttons: ['OK']
      }); 
      alert.present();
    }
    
  }
  
 
}
