import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserOptions } from '../../models/userOptions';
import { NavController, Events } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api';
import { UserInfo } from '../../models/userInfo';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
  //styleUrls:['./login.scss']
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  userInfo: UserInfo;
  constructor(
    public userInfoApi: UserInfoApiProvider,
    public navCtrl: NavController,
    public events: Events,
    public ngoApi: NgoApiProvider
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log(this.login.username);
      this.userInfo = this.userInfoApi.getUserDetails(this.login.username, this.login.password);
      if (this.userInfo.ngoUser) {
        this.userInfoApi.setUserType("ngo-user");
        this.events.publish('ngo-user', this.userInfo);
      } else if (this.login.username == 'admin') {
        this.userInfoApi.setUserType("admin");
        this.userInfo.adminUser = true;
        this.events.publish('admin', this.userInfo);
      } else {
        this.userInfoApi.setUserType("public-user");
        this.events.publish('public-user', this.userInfo);
      }
      console.log(this.userInfoApi.getUserType());
    }
  }

  onSignup() {
    //this.router.navigateByUrl('/signup');
    this.navCtrl.push(SignUpPage);
  }
}