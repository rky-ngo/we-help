import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ngo-request-items',
  templateUrl: 'ngo-request-items.html',
})
export class NgoRequestItemsPage {
  public requestItems:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestItems = this.navParams.data.requestItems;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoRequestItemsPage');
  }

}
