import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonateItemListPage } from '../donate-item-list/donate-item-list';
import firebase from 'firebase';

@Component({
  selector: 'page-requests-tab',
  templateUrl: 'requests-tab.html',
})
export class RequestsTabPage {

  public ngoObj : any;
  public ngoRequestRef : any;
  public ngoRequests:any;
  public items:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ngoObj = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsTabPage');
    this.ngoRequestRef = firebase.database().ref('ngo-requests');
    this.ngoRequestRef.once('value').then((snapshot)=>{
     this.ngoRequests = snapshot.val();
    
     let ngoRequestList = Object.keys(this.ngoRequests);
     for(var i=0;i<ngoRequestList.length;i++){
       var requestId = ngoRequestList[i];
       if(this.ngoRequests[requestId].ngoId === this.ngoObj.ngoId){
        this.items = this.ngoRequests[requestId].items;
       }
     }
     console.log(this.items); 
  });
}

   goToDonateItemPage(request){
     this.navCtrl.push(DonateItemListPage, request);
   }

}
