import { Component,Injectable,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Saludos } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
//import {DOCUMENT}from '@angular/common';

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
@Injectable(
  // providedIn:"root"
 )
/**
 * Generated class for the NumerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Saludos',
  templateUrl: 'saludos.html',
})
export class SaludosPage implements OnInit {
 /*  NumerosCollection: AngularFirestoreCollection<Numeros>;
  NumerosArray: Observable<Numeros[]>;
  productDoc: AngularFirestoreDocument<Numeros>; */
  SaludosArray:Saludos[]=[];
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
    this.http.get('assets/Saludos.json').subscribe((res:any)=>{
      this.SaludosArray=res.SaludosArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludosPage');
  }

}