import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonateItemListPage } from '../donate-item-list/donate-item-list';

@Component({
  selector: 'page-requests-tab',
  templateUrl: 'requests-tab.html',
})
export class RequestsTabPage {

  public ngoObj : any;
  public allRequests: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ngoObj = this.navParams.data;
    this.allRequests = this.ngoObj.requests;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsTabPage');
  }

  goToDonateItemPage(){
    this.navCtrl.push(DonateItemListPage);
  }

}
