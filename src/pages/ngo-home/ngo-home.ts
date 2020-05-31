import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { CategoryListPage } from '../category-list/category-list';

@Component({
  selector: 'page-ngo-home',
  templateUrl: 'ngo-home.html',
})
export class NgoHomePage {
  public selectedRequests = [];
  public ngoRequests:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private requestsApi:RequestApiProvider, private events:Events) {
      this.events.subscribe('ngo-requests-loaded',()=>{
        this.ngoRequests = this.requestsApi.getAllRequestByNgoId('-M8FpXwyEPpesj1W3ZDq');
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoHomePage');
    this.requestsApi.loadAllRequests();
  }

  goToCategoryList(){
    this.navCtrl.push(CategoryListPage);
  }

  selectionChanged(request){
    if(request.selectedForDelete){
      this.selectedRequests.push(request);
    }
  }

  deleteRequests(){
    this.requestsApi.deleteRequests(this.selectedRequests);
    this.requestsApi.loadAllRequests();
    console.log('remaining..', this.ngoRequests);
  }

}
