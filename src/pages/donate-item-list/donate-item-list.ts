import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoDetailPage } from '../ngo-detail/ngo-detail';

//1
@Component({
  selector: 'page-donate-item-list',
  templateUrl: 'donate-item-list.html',
})
export class DonateItemListPage {

  public requestsArray: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestsArray = this.navParams.data;
    console.log(this.requestsArray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateItemListPage');
  }

  goToNgoPage(){
    this.navCtrl.popTo(NgoDetailPage);
  }

  decrementNumber(){

  }
  incrementNumber(){
    
  }

}
