import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgoDetailPage } from '../ngo-detail/ngo-detail';
import {DonatePage} from '../donate/donate'

//1
@Component({
  selector: 'page-donate-item-list',
  templateUrl: 'donate-item-list.html',
})
export class DonateItemListPage {

  public requestsArray: any;
  public requestObject : any;
  public itemCounter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestObject = this.navParams.data;
    this.requestsArray = this.requestObject.categoryItems;
    for(var i=0;i<this.requestsArray.length;i++){
      this.requestsArray[i]["count"] = 5;
      this.requestsArray[i]["toggle"] = false;
    }
    console.log(this.requestsArray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateItemListPage');
    this.itemCounter = 5;
  }

  goToNgoPage(){
    this.navCtrl.popTo(NgoDetailPage);
  }

  decrementNumber(request){
    if(request["toggle"] == true){
      request["count"] --;
    }
    
  }
  incrementNumber(request){
    if(request["toggle"] == true){
      request["count"] ++;
    }
  }

  changeToggleStatus(request){
    
    if(request["toggle"] == false){
      request["toggle"] = true;
    }else{
      request["toggle"] = false;
    }
  }

  goToDonatePage(requestsArray){
    this.navCtrl.push(DonatePage, requestsArray)

  }

}
