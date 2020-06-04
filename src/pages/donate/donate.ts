import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api'
import { DonateInfoApiProvider } from '../../providers/donate-info-api/donate-info-api';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {
  public event = {
    month: 'Feb 19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };
  public myDate1: Date = new Date();
  public donateInfo:any;
  public isDonarDeliver:boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public userInfoApi: UserInfoApiProvider,
    public events: Events,
    public donateApi:DonateInfoApiProvider) {
    this.donateInfo = this.navParams.data;
    console.log('items list in donate page', this.donateInfo);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

  saveDonateInfo(donate){
    donate['ngoPickup'] = !this.isDonarDeliver;
    donate['preferredTime'] = this.myDate1;
    donate['userInfo'] = this.userInfoApi.getLoggedInUserDetails();
    var key = this.donateApi.saveUserDonateInfo(donate);
    if(key){
      this.events.publish('user-donated', donate, key);
      this.openThankYouAlert();
    }
  }

  openThankYouAlert() {
    let alert = this.alertCtrl.create({
      title: 'You are Awesome..!!',
      subTitle: 'We ensure, your contribution reaches to requestors',
      buttons: ['Ok']
    });
    alert.onDidDismiss(() => {
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
    });
    alert.present();
  }
  goHome() {
    this.navCtrl.popToRoot();
  }
}
