import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { RequestApiProvider } from '../../providers/request-api/request-api';
import { CategoryListPage } from '../category-list/category-list';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-ngo-home',
  templateUrl: 'ngo-home.html',
})
export class NgoHomePage {
  public selectedRequests = [];
  public ngoRequests:any;
  public ngos:any;
  public ngoId:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private requestsApi:RequestApiProvider, private events:Events,
    private userApi:UserInfoApiProvider,
    private ngoApi:NgoApiProvider) {
      var userInfo = this.userApi.getLoggedInUserDetails();
      
      // code to get ngoId
      this.events.subscribe('ngoList-fetched', () => {
        this.ngos = this.ngoApi.getNGOList();
        var ngoIds = Object.keys(this.ngos);
        ngoIds.forEach(key => {
          var ngo = this.ngos[key];
          if(ngo.userInfo.name == userInfo.name && ngo.userInfo.password == userInfo.password){
            this.ngoId = key;
            ngoApi.setNgoIdOfLoggedInUser(this.ngoId);
          }
        })
      });

      //code to get ngo request by id
      this.events.subscribe('ngo-requests-loaded',()=>{
        if(this.ngoId){
          this.ngoRequests = this.requestsApi.getAllRequestByNgoId(this.ngoId);
        }else{
          console.log('Ngo id is not yet loaded');
        }
      });
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgoHomePage');
    this.ngoApi.getNGOListFromDb();
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
