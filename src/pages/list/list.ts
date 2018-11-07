import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {JuegoAbcPage} from '../../pages/juego-abc/juego-abc';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  redirectJuegoAbc(){
this.navCtrl.setRoot(JuegoAbcPage);
  }
}
