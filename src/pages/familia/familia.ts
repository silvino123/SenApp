import { Component,Injectable,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Familia } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';


@Injectable(
  // providedIn:"root"
 )
/**
 * Generated class for the FamiliaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Familia',
  templateUrl: 'Familia.html',
})
export class FamiliaPage implements OnInit {
 /*  NumerosCollection: AngularFirestoreCollection<Numeros>;
  NumerosArray: Observable<Numeros[]>;
  productDoc: AngularFirestoreDocument<Numeros>; */
  FamiliaresArray:Familia[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
   /*  this.NumerosCollection = this.db.collection('numero');
    this.NumerosArray = this.NumerosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Numeros;
        data.id = a.payload.doc.id;
         return data;
      });
    })); */
  }
  ngOnInit(){
    this.http.get('assets/Familia.json').subscribe((res:any)=>{
      this.FamiliaresArray=res.FamiliaresArray;
    });
  }

  

}