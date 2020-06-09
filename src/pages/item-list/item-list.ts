import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemInfoApiProvider } from '../../providers/item-info-api/item-info-api';
import { ItemInfo } from '../../models/itemInfo';

@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {
  public categoryName:string;
  public categoryItems:any;
  public itemsInfo = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private itemInfoApi:ItemInfoApiProvider) {
    this.categoryName = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
    this.categoryItems = this.itemInfoApi.getAllItemsByCategoryName(this.categoryName);
    var itemNames = Object.keys(this.categoryItems);
    for(var i=0; i<itemNames.length-1; i++){
      var itemInfo:ItemInfo = {
        name:itemNames[i],
        category:this.categoryName,
        qty:0,
        imageName:this.categoryItems[itemNames[i]].imageName,
        id:this.categoryItems[itemNames[i]].itemId,
        itemStatus:'pending'
      }
      this.itemsInfo.push(itemInfo);
    }
  }

  done(itemsInfo){
    console.log(itemsInfo);
    this.itemInfoApi.addItemsToRequestBasket(itemsInfo);
    this.navCtrl.pop();
  }

}
