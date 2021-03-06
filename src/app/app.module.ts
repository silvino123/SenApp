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
import{ JuegoAbcPage }from '../pages/juego-abc/juego-abc';
import {JuegonumerosPage} from '../pages/juegonumeros/juegonumeros';
import {JuegoColoresPage} from '../pages/juego-colores/juego-colores';
import {TiempoPage} from '../pages/tiempo/tiempo';
import{ColoresPage}from '../pages/colores/colores';
import {EstacionesPage} from '../pages/estaciones/estaciones';
import {MesesPage} from '../pages/meses/meses';
import {ProfesionesPage} from '../pages/profesiones/profesiones';
import {HoraPage} from '../pages/hora/hora';
import {JuegotiempoPage} from '../pages/juegotiempo/juegotiempo';
import {JuegoprofesionesPage} from'../pages/juegoprofesiones/juegoprofesiones';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SaludosPage} from '../pages/saludos/saludos';
import {JuegosaludosPage}from '../pages/juegosaludos/juegosaludos';
import {FamiliaPage} from '../pages/familia/familia';
import {JuegoFamiliaPage} from '../pages/juego-familia/juego-familia';
import {SentimientosPage} from '../pages/sentimientos/sentimientos';
import {VerbosPage} from '../pages/verbos/verbos';
import {SaludPage} from '../pages/salud/salud';
import {JuegoSentimientosPage} from '../pages/juegosentimientos/juegosentimientos';
import {JuegoVerbosPage} from '../pages/juegoverbos/juegoverbos';
import {JuegoSaludPage} from '../pages/juegosalud/juegosalud';
import {AcercaPage} from '../pages/acerca/acerca';
import { IonicStorageModule } from '@ionic/storage';
 


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
    JuegonumerosPage,
    JuegoColoresPage,
    ColoresPage,
    TiempoPage,
    EstacionesPage,
    MesesPage,
    HoraPage,
    ProfesionesPage,
    JuegotiempoPage,
    JuegoprofesionesPage,
    SaludosPage,
    JuegosaludosPage,
    FamiliaPage,
    JuegoFamiliaPage,
    SentimientosPage,
    VerbosPage,
    SaludPage,
    JuegoSentimientosPage,
    JuegoVerbosPage,
    JuegoSaludPage,
    AcercaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    JuegonumerosPage,
    JuegoColoresPage,
    ColoresPage,
    TiempoPage,
    EstacionesPage,
    MesesPage,
    HoraPage,
    ProfesionesPage,
    JuegotiempoPage,
    JuegoprofesionesPage,
    SaludosPage,
    JuegosaludosPage, 
    FamiliaPage,
    JuegoFamiliaPage,
    SentimientosPage,
    VerbosPage,
    SaludPage,
    JuegoSentimientosPage,
    JuegoVerbosPage,
    JuegoSaludPage,
    AcercaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
