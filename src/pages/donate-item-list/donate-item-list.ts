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

  public requestsArray = [];
  public requestObject : any;
  public itemCounter: any;
  public requestItems = [];
  public allCategoryItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestObject = this.navParams.data;
    console.log('Inside donate item list page',this.requestObject)
    this.allCategoryItems = this.requestObject.requestItems;
    this.allCategoryItems.forEach(items => {
      items.categoryItems.forEach(item => {
        item['qtyDonated'] = item.qty;
      })
    });
    this.requestItems = this.allCategoryItems;
    // for(var j=0;j<this.allItems.length;j++){
    //   this.requestsArray = this.allItems[j].categoryItems;
    //   for(var i=0;i<this.requestsArray.length;i++){
    //     this.requestsArray[i]["count"] = 0;
    //     this.requestsArray[i]["toggle"] = false;
    //     this.allCategoryItems.push(this.requestsArray[i]);
    //   }
    // }
    
    
    //console.log(this.allCategoryItems);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonateItemListPage');
    this.itemCounter = 5;
  }

  goToNgoPage(){
    this.navCtrl.popTo(NgoDetailPage);
  }

  // decrementNumber(request){
  //   if(request["toggle"] == true){
  //     request["count"] --;
  //   }
    
  // }
  // incrementNumber(request){
  //   if(request["toggle"] == true){
  //     request["count"] ++;
  //   }
  // }

  // changeToggleStatus(request){
    
  //   if(request["toggle"] == false){
  //     request["toggle"] = true;
  //   }else{
  //     request["toggle"] = false;
  //   }
  // }

  goToDonatePage(requestItems){
    var requestDetails = {
      requestId:this.requestObject.requestId,
      donateItems:requestItems,
      ngoId:this.requestObject.ngoId
    }
    this.navCtrl.push(DonatePage, requestDetails);

  }

}
