import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ngo-pending-requests-tab',
  templateUrl: 'ngo-pending-requests-tab.html',
})
export class NgoPendingRequestsTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoPendingRequestsTabPage');
  }

}
