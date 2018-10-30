import { Component ,NgZone,Injectable} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Letras } from '../../app/models/Letras';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the AbcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable(
  // providedIn:"root"
 )
@IonicPage()
@Component({
  selector: 'page-abc',
  templateUrl: 'abc.html',
})
export class AbcPage {
  
  LetrasCollection: AngularFirestoreCollection<Letras>;
  LetrasArray: Observable<Letras[]>;
  productDoc: AngularFirestoreDocument<Letras>;
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,public db: AngularFirestore) {
 
    this.LetrasCollection = this.db.collection('abc');
    this.LetrasArray = this.LetrasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Letras;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  
}
