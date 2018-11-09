import { Component,Injectable,Inject,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Numeros } from '../../app/models/Letras';
import { HttpClient} from '@angular/common/http';
import {DOCUMENT}from '@angular/common';

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
  selector: 'page-numeros',
  templateUrl: 'numeros.html',
})
export class NumerosPage implements OnInit {
 /*  NumerosCollection: AngularFirestoreCollection<Numeros>;
  NumerosArray: Observable<Numeros[]>;
  productDoc: AngularFirestoreDocument<Numeros>; */
  NumerosArray:Numeros[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,@Inject(DOCUMENT) private document) {
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
    this.http.get('assets/NumerosArray.json').subscribe((res:any)=>{
      this.NumerosArray=res.NumerosArray;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

}
