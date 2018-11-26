import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,DomController } from 'ionic-angular';
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
  ActivarColor:Colores;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,private domCtrl:DomController) {
  }

  ngOnInit(){
    this.http.get('assets/Colores.json').subscribe((res:any)=>{
      this.ColoresArray=res.ColoresArray
      this.ActivarColor= this.ColoresArray[length];
      this.domCtrl.write(()=>{
        document.documentElement.style.setProperty('--card-title-md-background-color',this.ActivarColor.background);
      }
      )
    });
  }

}
