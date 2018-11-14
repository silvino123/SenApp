import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
// FIRESTORE
//import { AngularFireModule} from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{AbcPage}from '../pages/abc/abc';
import{NumerosPage} from '../pages/numeros/numeros';
import {ExamenPage} from '../pages/examen/examen';
import{ JuegoAbcPage }from '../pages/juego-abc/juego-abc'
import{ColoresPage}from '../pages/colores/colores';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { from } from 'rxjs';

//import { from } from 'rxjs';
/* var config = {
  apiKey: "AIzaSyCfu5Zuq8Ut87PtyP-lHwp1eTwC3NfbpWM",
  authDomain: "senapp-d0e0f.firebaseapp.com",
  databaseURL: "https://senapp-d0e0f.firebaseio.com",
  projectId: "senapp-d0e0f",
  storageBucket: "senapp-d0e0f.appspot.com",
 storageBucket: "senapp2-611c8.appspot.com",
  messagingSenderId: "285210696870"
}; */
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AbcPage,
    NumerosPage,
    ExamenPage,
    JuegoAbcPage,
    ColoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    //AngularFireModule.initializeApp(config),
    //AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AbcPage,
    NumerosPage,
    ExamenPage,
    JuegoAbcPage,
    ColoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
