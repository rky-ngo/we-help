import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { CategoryListPage } from '../category-list/category-list';

@Component({
  selector: 'page-ngo-home',
  templateUrl: 'ngo-home.html',
})
export class NgoHomePage {

  public showWelcomeNote:boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private requestsApi:RequestApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoHomePage');
    //this.requestsApi.getAllRequestByNgoId(this.navParams.data);
  }

  goToCategoryList(){
    this.navCtrl.push(CategoryListPage);
  }

}
