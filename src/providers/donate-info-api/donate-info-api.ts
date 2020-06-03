import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Events } from 'ionic-angular';
import { NgoApiProvider } from '../ngo-api/ngo-api';

@Injectable()
export class DonateInfoApiProvider {
  private _userDonatesRef:any;
  private allDonates:any;
  constructor(private events:Events, private ngoApi:NgoApiProvider) {
    this._userDonatesRef = firebase.database().ref('user-donates');
  }

  saveUserDonateInfo(userDonate){
    var key = this._userDonatesRef.push(userDonate).key;
    return key;
  }

  loadAllDonates(){
    this._userDonatesRef.once('value').then(snapshot => {
      this.allDonates = snapshot.val();
      console.log('All donates are loaded:',this.allDonates);
      this.events.publish('user-donates-loaded');
    })
  }

  // -M8pb0W2mTHsYouIm8hv:
  // donateItems: (2) [{…}, {…}]
  // ngoId: "-M8FpXwyEPpesj1W3ZDq"
  // ngoPickup: true
  // requestId: "-M8aR_PzUyZAvstB5SbC"
  // userInfo: {adminUser: false, id: "-M8H7UXvmx5NhxR1Pfdt", name: "user-public", ngoUser: false, password: "public", …}
  // __proto__: Object
  // -M8pduEURTPMOuwD2syl: {donateItems: Array(3), ngoId: "-M8FpXwyEPpesj1W3ZDq", ngoPickup: true, requestId: "-M8ctxX7nx-XS_4kswNu", userInfo: {…}}
  // one: "two"

  getAllDonatesByUserId(userId){
    console.log('donate Api userId', userId);
    var userDonates:any = [];
    var keys:string[] = Object.keys(this.allDonates);
    keys.forEach(userDonateId => {
      var donateInfo = this.allDonates[userDonateId];
      if(donateInfo.userInfo.id == userId){
        var ngoInfo = this.ngoApi.getNgoDetailsById(donateInfo.ngoId);
        donateInfo['ngoName'] = ngoInfo.name;
        userDonates.push(donateInfo);
      }
    });
    return userDonates;
  }

  getAllDonatesforNgoId(ngoId){
    var userDonates:any = [];
    var keys:string[] = Object.keys(this.allDonates);
    keys.forEach(donateId => {
      var donateInfo = this.allDonates[donateId];
      if(donateInfo.ngoId == ngoId){
        userDonates.push(donateInfo);
      }
    });
    return userDonates;
  }

}
