import { Component ,NgZone,Injectable, Inject,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Letras } from '../../app/models/Letras';
import {DOCUMENT}from '@angular/common';

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import { from } from 'rxjs';

//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
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
export class AbcPage implements OnInit {
  
  /* LetrasCollection: AngularFirestoreCollection<Letras>;
  LetrasArray: Observable<Letras[]>;
  productDoc: AngularFirestoreDocument<Letras>; */
  LetrasArray:Letras[]=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone:NgZone,private http:HttpClient,@Inject(DOCUMENT) private document) {
    
    /* this.LetrasCollection = this.db.collection('abc');
    this.LetrasArray = this.LetrasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Letras;
        data.id = a.payload.doc.id;
         return data;
      });
    })); */
  }

  ngOnInit(){
    this.http.get('assets/LetrasArray.json').subscribe((res:any)=>{
      this.LetrasArray=res.LetrasArray
    });
  }
}
