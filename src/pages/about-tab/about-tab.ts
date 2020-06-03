import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoacationPage } from '../loacation/loacation';

@Component({
  selector: 'page-about-tab',
  templateUrl: 'about-tab.html',
})
export class AboutTabPage {
  public ngoObj: any;
  public name: any;
  public description: any;
  public ngoList: any;
  public imageName: string;
  public phone:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertController:AlertController) {
    this.ngoObj = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutTabPage');
    this.name = this.ngoObj.name;
    this.description = this.ngoObj.description;
    this.imageName = this.ngoObj.imageName;
    this.phone = this.ngoObj.phoneNumber;
  }

  goToLoacationPage(){
    this.navCtrl.push(LoacationPage);
  }

  openCallAlert() {
    var options = {
      title: 'Call',
      subTitle: this.phone,
      buttons: ['Ok']
    };
    let alert = this.alertController.create(options);
    alert.onDidDismiss(() => {
    });
    alert.present();
  }

}
