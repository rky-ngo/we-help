import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { ItemListPage } from '../item-list/item-list';
import { ItemInfoApiProvider } from '../../providers/item-info-api/item-info-api';
import { PostRequestPage } from '../post-request/post-request';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {
  public categories = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private itemInfoApi:ItemInfoApiProvider, 
    private events:Events) {
      this.events.subscribe('categories-loaded',()=>{
        this.categories = this.itemInfoApi.getAllCategories();
        console.log('categories loaded on page', this.categories);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryListPage');
    this.itemInfoApi.loadAllCategories();
  }

  gotoItems(categoryName){
    this.navCtrl.push(ItemListPage, categoryName);
  }

  goToPostRequestPage(){
    this.navCtrl.push(PostRequestPage)
  }

}
