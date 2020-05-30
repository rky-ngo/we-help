import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { NgoDetailPage } from '../ngo-detail/ngo-detail';
import { Ngo } from '../../models/ngo';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nearByNgos:Ngo[] = [];
  public recentRequestsByNgos = [];
  public ngosHelpedByYou = [];
  public ngoListRef:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private ngoApi: NgoApiProvider, private events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.ngoApi.getNGOListFromDb();
    this.events.subscribe('ngoList-fetched',()=>{
      this.ngoListRef = this.ngoApi.getNGOList();
      var ngoList = Object.keys(this.ngoListRef);
      for(var i = 0; i<ngoList.length;i++){
        
        this.nearByNgos.push(this.ngoListRef[ngoList[i]]);
      }
      //console.log(this.nearByNgos);
    });
  }

  goToNgoDetailPage(ngo){
    this.navCtrl.push(NgoDetailPage, ngo);
  }

}
