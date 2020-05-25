import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoPendingRequestsTabPage } from '../ngo-pending-requests-tab/ngo-pending-requests-tab';
import { NgoCompletedRequestsTabPage } from '../ngo-completed-requests-tab/ngo-completed-requests-tab';

/**
 * Generated class for the NgoRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ngo-requests',
  templateUrl: 'ngo-requests.html',
})
export class NgoRequestsPage {
  public pendingTab = NgoPendingRequestsTabPage;
  public completedTab = NgoCompletedRequestsTabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoRequestsPage');
  }

}
