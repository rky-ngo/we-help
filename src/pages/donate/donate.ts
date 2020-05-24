import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
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
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
