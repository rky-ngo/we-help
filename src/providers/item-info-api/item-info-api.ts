import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from 'ionic-angular';

@Injectable()
export class ItemInfoApiProvider {
  private categoryKeys:string[];
  private itemsObj:any;
  private newRequestItems:any = [];
  private newRequestItemsCount:number = 0;

  constructor(public http: HttpClient, private events:Events) {
    console.log('Hello ItemInfoApiProvider Provider');
  }

  loadAllCategories(){
    var categoriesRef = firebase.database().ref('Categories');
    categoriesRef.once('value').then(snapshot => {
      console.log(snapshot.val());
      this.itemsObj = snapshot.val();
      this.categoryKeys = Object.keys(this.itemsObj);
      this.events.publish('categories-loaded')
    });
  }

  addItemsToRequestBasket(items){
    var categoryName = items[0].category
    var item = {};
    var selectedItems = [];
    items.forEach(element => {
      if(element.qty > 0){
        selectedItems.push(element);
      }
    });
    item[categoryName] = selectedItems;
    this.newRequestItems.push(item);
    console.log(this.newRequestItems);
    this.newRequestItemsCount = this.newRequestItemsCount + selectedItems.length;
    this.events.publish('count-updated');
  }

  getRequestItemsToPost(){
    return this.newRequestItems;
  }

  getRequestItemsToPostCount(){
    return this.newRequestItemsCount;
  }

  getAllItemsByCategoryName(categoryName){    
    return this.itemsObj[categoryName];
  }

  getAllCategories(){
    var categories = [];
    this.categoryKeys.forEach(element => {
      var categoryDetails = {
        name:'',
        imageName:''
      }
      categoryDetails.name = element;
      categoryDetails.imageName = this.itemsObj[element].imageName;
      categories.push(categoryDetails);
    })
    return categories;
  }

}
