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
