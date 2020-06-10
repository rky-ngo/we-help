import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';


@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {
  public accept:string = '';
  public nearByNgos = [];
  public ngoListRef:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public ngoApi:NgoApiProvider, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
    this.ngoApi.getNGOListFromDb();
    this.events.subscribe('ngoList-fetched',()=>{
      this.ngoListRef = this.ngoApi.getNGOList();
      var ngoList = Object.keys(this.ngoListRef);
      for(var i = 0; i<ngoList.length;i++){
        this.ngoListRef[ngoList[i]]["ngoId"] = ngoList[i];
        this.nearByNgos.push(this.ngoListRef[ngoList[i]]);
      }
      console.log(this.nearByNgos);
    });
  }

}
