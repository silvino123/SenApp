import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// FIRESTORE
import { AngularFireModule ,FirebaseStorage} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{AbcPage}from '../pages/abc/abc';
import{NumerosPage} from '../pages/numeros/numeros';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var config = {
  apiKey: "AIzaSyCfu5Zuq8Ut87PtyP-lHwp1eTwC3NfbpWM",
  authDomain: "senapp-d0e0f.firebaseapp.com",
  databaseURL: "https://senapp-d0e0f.firebaseio.com",
  projectId: "senapp-d0e0f",
  storageBucket: "senapp-d0e0f.appspot.com",
  messagingSenderId: "285210696870"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AbcPage,
    NumerosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AbcPage,
    NumerosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
