import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { DonateInfoApiProvider } from '../../providers/donate-info-api/donate-info-api';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api';

@Component({
  selector: 'page-user-donates',
  templateUrl: 'user-donates.html',
})
export class UserDonatesPage {
  public userDonates:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private donateInfoApi:DonateInfoApiProvider,
    private events:Events, private userInfoApi:UserInfoApiProvider) {
      this.events.subscribe('user-donates-loaded', ()=>{
        this.userDonates = donateInfoApi.getAllDonatesByUserId(this.userInfoApi.getLoggedInUserDetails().id);
        console.log(this.userDonates);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDonatesPage');
    this.donateInfoApi.loadAllDonates();
  }

}
