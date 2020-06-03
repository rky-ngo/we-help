import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { DonateItemListPage } from '../donate-item-list/donate-item-list';
import { RequestApiProvider } from '../../providers/request-api/request-api';

@Component({
  selector: 'page-requests-tab',
  templateUrl: 'requests-tab.html',
})
export class RequestsTabPage {

  public ngoRequests:any;
  public ngoRequestsDisplay:any = [];  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public requestApi:RequestApiProvider, private events:Events) {
    var ngoId = this.navParams.data.ngoId;
    this.events.subscribe('ngo-requests-loaded', ()=>{
      this.ngoRequests = this.requestApi.getAllRequestByNgoId(ngoId);
      this.ngoRequests.forEach(request => {
        if(request.requestStatus != 'Done'){
          var requestTitle = '';
          request.requestItems.forEach(item => {
            requestTitle = requestTitle.concat(item.categoryName+', ');
          });
          requestTitle = requestTitle.substring(0, requestTitle.length - 2);
          request['requestTitle'] = requestTitle;
          request['ngoId'] = ngoId;
          this.ngoRequestsDisplay.push(request);
        }
      })
    })
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad RequestsTabPage');
      this.requestApi.loadAllRequests();
}

   goToDonateItemPage(request){
     this.navCtrl.push(DonateItemListPage, request);
   }

}
