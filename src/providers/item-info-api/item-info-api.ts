import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from 'ionic-angular';

@Injectable()
export class ItemInfoApiProvider {
  private categories:string[];
  private itemsObj:any;
  constructor(public http: HttpClient, private events:Events) {
    console.log('Hello ItemInfoApiProvider Provider');
  }

  loadAllCategories(){
    var categoriesRef = firebase.database().ref('Categories');
    categoriesRef.once('value').then(snapshot => {
      console.log(snapshot.val());
      this.itemsObj = snapshot.val();
      this.categories = Object.keys(this.itemsObj);
      console.log(this.categories);
      this.events.publish('categories-loaded')
    });
  }

  getAllItemsByCategoryName(categoryName){
    return this.itemsObj[categoryName];
  }

  getAllCategories():string[]{
    return this.categories;
  }

}
