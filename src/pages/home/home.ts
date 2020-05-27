import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoDetailPage } from '../ngo-detail/ngo-detail';
import { Ngo } from '../../models/ngo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nearByNgos:Ngo[] = [];
  public recentRequestsByNgos = [];
  public ngosHelpedByYou = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToNgoPage(){
    this.navCtrl.push(NgoDetailPage);
  }

}
