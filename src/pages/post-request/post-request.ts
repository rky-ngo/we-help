import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { ItemInfoApiProvider } from '../../providers/item-info-api/item-info-api';
import * as _ from 'lodash';
import { RequestInfo } from '../../models/request';
import { NgoHomePage } from '../ngo-home/ngo-home';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-post-request',
  templateUrl: 'post-request.html',
})
export class PostRequestPage {
  public itemsToPost: any;
  public keys = [];
  public allItems = [];
  private allCategoryItems: any;
  public requestItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private itemInfoApi: ItemInfoApiProvider,
    private events: Events, private requestInfoApi: RequestApiProvider,
    public alertCtrl: AlertController, private ngoApi:NgoApiProvider) {
    this.itemsToPost = this.itemInfoApi.getRequestItemsToPost();
    console.log('Items to post', this.itemsToPost);
    for (var i = 0; i < this.itemsToPost.length; i++) {
      this.keys.push(Object.keys(this.itemsToPost[i]));
      var temp = this.itemsToPost[i][this.keys[i]];
      for (var j = 0; j < temp.length; j++) {
          this.allItems.push(temp[j]);
      }
    }
    this.allCategoryItems =
      _.chain(this.allItems)
        .groupBy('category')
        .toPairs()
        .map(item => _.zipObject(['categoryName', 'categoryItems'], item))
        .value();

    this.requestItems = this.allCategoryItems;
    console.log('after category items grouped',this.requestItems);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostRequestPage');
  }

  postRequest() {
    var ngoId = this.ngoApi.getNgoIdOfLoggedInUser();
    var request: RequestInfo = {
      ngoId: ngoId,
      details: '',
      items: this.requestItems,
      requestStatus: 'pending'
    }

    var key = this.requestInfoApi.createRequest(request);

    if (key) {

      let alert = this.alertCtrl.create({
        title: 'Request Posted Successfully',
        subTitle: 'We hope our donors will fulfill your request soon.',
        buttons: ['Ok']
      });
      alert.onDidDismiss(() => {
        this.events.publish('request-posted');
        this.navCtrl.push(NgoHomePage);
        this.navCtrl.setRoot(NgoHomePage);
      });
      alert.present();
    }
  }
}
