import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';
import { NgoRequestItemsPage } from '../ngo-request-items/ngo-request-items';
import { RequestApiProvider } from '../../providers/request-api/request-api';

@Component({
  selector: 'page-ngo-completed-requests-tab',
  templateUrl: 'ngo-completed-requests-tab.html',
})
export class NgoCompletedRequestsTabPage {
  public completedRequests:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private requestsApi:RequestApiProvider, private ngoApi:NgoApiProvider,
    private events:Events) {
      this.events.subscribe('ngo-requests-loaded',()=>{
        var ngoId = this.ngoApi.getNgoIdOfLoggedInUser();
        var allRequests = this.requestsApi.getAllRequestByNgoId(ngoId);
        allRequests.forEach(request => {
          if(request.requestStatus != 'pending'){
            this.completedRequests.push(request);
          }
        });
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoCompletedRequestsTabPage');
    this.requestsApi.loadAllRequests();
  }

  goToRequestDetailsPage(request){
    this.navCtrl.push(NgoRequestItemsPage, request);
  }

}
