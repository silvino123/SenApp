import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Colores } from '../../app/models/Letras';

/**
 * Generated class for the ColoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colores',
  templateUrl: 'colores.html',
})
export class ColoresPage {
  ColoresArray:Colores[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  ngOnInit(){
    this.http.get('assets/Colores.json').subscribe((res:any)=>{
      this.ColoresArray=res.ColoresArray
    });
  }

}
