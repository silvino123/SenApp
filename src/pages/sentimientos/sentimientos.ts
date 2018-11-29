import { Component,Injectable,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sentimientos } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the SentimientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable(
  // providedIn:"root"
 )

@IonicPage()
@Component({
  selector: 'page-sentimientos',
  templateUrl: 'sentimientos.html',
})

export class SentimientosPage implements OnInit {


  SentimientosArray:Sentimientos[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/Sentimientos.json').subscribe((res:any)=>{
      this.SentimientosArray=res.SentimientosArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SentimientosPage');
  }

}
