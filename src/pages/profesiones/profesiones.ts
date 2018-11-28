import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Profesiones } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the ProfesionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesiones',
  templateUrl: 'profesiones.html',
})
export class ProfesionesPage implements OnInit {
  ProfesionesArray:Profesiones[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }

  ngOnInit(){
    this.http.get('assets/Profesiones.json').subscribe((res:any)=>{
      this.ProfesionesArray=res.ProfesionesArray;
    });
  }

}
