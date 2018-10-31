import { Component,Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Numeros } from '../../app/models/Letras';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
export class NumerosPage {
  NumerosCollection: AngularFirestoreCollection<Numeros>;
  NumerosArray: Observable<Numeros[]>;
  productDoc: AngularFirestoreDocument<Numeros>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFirestore) {
    this.NumerosCollection = this.db.collection('numero');
    this.NumerosArray = this.NumerosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Numeros;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumerosPage');
  }

}
