import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonateItemListPage } from '../donate-item-list/donate-item-list';

@Component({
  selector: 'page-requests-tab',
  templateUrl: 'requests-tab.html',
})
export class RequestsTabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsTabPage');
  }

  goToDonateItemPage(){
    this.navCtrl.push(DonateItemListPage);
  }

}
