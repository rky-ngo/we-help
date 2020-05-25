import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ngo-home',
  templateUrl: 'ngo-home.html',
})
export class NgoHomePage {

  public showWelcomeNote:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoHomePage');
  }

}
