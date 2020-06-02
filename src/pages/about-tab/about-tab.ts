import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';
import { LoacationPage } from '../loacation/loacation';

@Component({
  selector: 'page-about-tab',
  templateUrl: 'about-tab.html',
})
export class AboutTabPage {
  public ngoObj:any;
  public name:any;
  public description:any;
  public ngoList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ngoApi:NgoApiProvider) {
    this.ngoObj = this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutTabPage');
    this.name = this.ngoObj.name;
    this.description = this.ngoObj.description;
  }

  goToLoacationPage(){
    this.navCtrl.push(LoacationPage);
  }

}
