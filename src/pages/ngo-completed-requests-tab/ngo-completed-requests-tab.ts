import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NgoCompletedRequestsTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
