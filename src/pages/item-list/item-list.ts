import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemInfoApiProvider } from '../../providers/item-info-api/item-info-api';

@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {
  public categoryName:string;
  public categoryItems:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private itemInfoApi:ItemInfoApiProvider) {
    this.categoryName = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
    this.categoryItems = this.itemInfoApi.getAllItemsByCategoryName(this.categoryName);
  }

}
