import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { NgoRequestItemsPage } from '../ngo-request-items/ngo-request-items';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-ngo-pending-requests-tab',
  templateUrl: 'ngo-pending-requests-tab.html',
})
export class NgoPendingRequestsTabPage {
  public ngoRequests:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private requestsApi:RequestApiProvider, private events:Events,
    private ngoApi:NgoApiProvider) {
    this.events.subscribe('ngo-requests-loaded',()=>{
      this.ngoRequests = [];
      var ngoId = this.ngoApi.getNgoIdOfLoggedInUser();
      var allRequests = this.requestsApi.getAllRequestByNgoId(ngoId);
      allRequests.forEach(request => {
        if(request.requestStatus == 'pending'){
          this.ngoRequests.push(request);
        }
      });

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoPendingRequestsTabPage');
    this.requestsApi.loadAllRequests();
  }

  goToRequestDetailsPage(request){
    this.navCtrl.push(NgoRequestItemsPage, request);
  }

}
