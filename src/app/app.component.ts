import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ExamenPage} from '../pages/examen/examen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    platform.ready().then(() => {
      statusBar.styleLightContent();
      statusBar.backgroundColorByHexString("#90CAF9");
      
    });
   
  } 

  initializeApp() {
    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pages) {
    
    this.nav.setRoot(HomePage);
  }
  openPageList(pages) {
    
    this.nav.setRoot(ListPage);
  }
  openPagexamen(pages) {
  
    this.nav.setRoot(ExamenPage);
  }
}
