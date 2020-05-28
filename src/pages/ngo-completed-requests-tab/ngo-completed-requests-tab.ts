import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ngo-completed-requests-tab',
  templateUrl: 'ngo-completed-requests-tab.html',
})
export class NgoCompletedRequestsTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoCompletedRequestsTabPage');
  }

}
