import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {UserInfoApiProvider} from '../../providers/user-info-api/user-info-api'

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
  public myDate = {
    year: '2020',
    month:'May 20',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  };
  public myDate1:Date = new Date();
  private _donateRef: any;
  private _userDonatesObj = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public userInfoApi:UserInfoApiProvider) {
      var receivedIbj = this.navParams.data;
      this._userDonatesObj["requestId"] = receivedIbj.requestId;
      this._userDonatesObj["ngoId"] = receivedIbj.ngoId;
      this._userDonatesObj["status"] = "In Progress";
      var loggedInUser = userInfoApi.getLoggedInUserDetails();
      this._userDonatesObj["userInfo"] = loggedInUser;
      this._userDonatesObj["allCategoryItems"] = receivedIbj.allCategoryItems;
     
 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatePage');
  }

  openThankYouToast(){
    const toast = this.toastCtrl.create({
      message: 'Thank you for donating .. ',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.navCtrl.popToRoot();
  }

  openThankYouAlert(){
    let alert = this.alertCtrl.create({
      title: 'You are Awesome..',
      subTitle: 'Thank you for donating, please pack items before pick up time',
      buttons: ['Ok']
    });
    alert.present();
    this._userDonatesObj["preferredTime"] = this.myDate1;
    this._donateRef = firebase.database().ref('user-donates');
    this._donateRef.push(this._userDonatesObj).key;
    console.log(this._userDonatesObj);
  }

  goHome(){
    this.navCtrl.popToRoot();
  }



}
