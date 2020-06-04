import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api'

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public name:string;
  public phone:any;
  public id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userInfoApi: UserInfoApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
    var userInfo = this.userInfoApi.getLoggedInUserDetails();
    this.name = userInfo.name;
    this.phone = userInfo.phone;
    this.id = userInfo.id;
    console.log(userInfo);
  }


}
