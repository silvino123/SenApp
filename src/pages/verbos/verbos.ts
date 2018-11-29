import { Component,Injectable,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Verbos } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the VerbosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable(
  // providedIn:"root"
 )

@IonicPage()
@Component({
  selector: 'page-verbos',
  templateUrl: 'verbos.html',
})

export class VerbosPage implements OnInit {


  VerbosArray:Verbos[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  ngOnInit(){
    this.http.get('assets/Verbos.json').subscribe((res:any)=>{
      this.VerbosArray=res.VerbosArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerbosPage');
  }

}
