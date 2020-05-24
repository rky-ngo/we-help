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

  getNearByNgos(){
    let ngo1:Ngo;
    ngo1.name = "PRAGATHI CHARITABLE TRUST";
    ngo1.id = 1;
    ngo1.description = "The PRAGATHI CHARITABLE TRUST (R) is a registered non-governmental, non-religious and non-profitable social service organization working with the sole objective to Provide Food, Shelter, Cloth rehabilitation and Employment. Opportunities to the Poor, Sick and Disabled. We have been successfully rendering service to humane for the past many years in and around Bangalore and Karnataka."
    ngo1.imageName = "about1.jpg";
    this.nearByNgos.push(ngo1);
  }

}
