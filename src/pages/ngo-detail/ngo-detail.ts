import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutTabPage } from '../about-tab/about-tab';
import { RequestsTabPage } from '../requests-tab/requests-tab';
import { DonatePage } from '../donate/donate';

@Component({
  selector: 'page-ngo-detail',
  templateUrl: 'ngo-detail.html',
})
export class NgoDetailPage {

  public ngo:any;
  public aboutTab = AboutTabPage;
  public reqeustsTab = RequestsTabPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ngo = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoDetailPage');
  }

  goToDonatePage(){
    console.log('inside donate page')
    this.navCtrl.push(DonatePage);
  }

}
