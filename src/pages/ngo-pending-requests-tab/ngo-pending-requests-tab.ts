import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { NgoRequestItemsPage } from '../ngo-request-items/ngo-request-items';

@Component({
  selector: 'page-ngo-pending-requests-tab',
  templateUrl: 'ngo-pending-requests-tab.html',
})
export class NgoPendingRequestsTabPage {
  public ngoRequests:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private requestsApi:RequestApiProvider, private events:Events) {
    this.events.subscribe('ngo-requests-loaded',()=>{
      this.ngoRequests = this.requestsApi.getAllRequestByNgoId('-M8FpXwyEPpesj1W3ZDq');
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
