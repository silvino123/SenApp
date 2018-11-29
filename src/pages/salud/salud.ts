import { Component,Injectable,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Salud } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the SaludPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable(
  // providedIn:"root"
 )

@IonicPage()
@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})

export class SaludPage implements OnInit {


  SaludArray:Salud[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/Salud.json').subscribe((res:any)=>{
      this.SaludArray=res.SaludArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludPage');
  }

}
