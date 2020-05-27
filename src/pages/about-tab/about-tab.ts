import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-about-tab',
  templateUrl: 'about-tab.html',
})
export class AboutTabPage {
  public ngo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ngoApi:NgoApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutTabPage');
    this.ngo = this.ngoApi.getNgoDetailsById('-M8FpXwyEPpesj1W3ZDq');
  }

}
