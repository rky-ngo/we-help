import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { Events } from 'ionic-angular';

@Injectable()
export class NgoApiProvider {

  private _ngosRef:any;
  private _ngos:any;
  private _ngoInfo:any;
  public nameRef:any;
  private _ngoListRef:any;
  private _ngoListObj:any;
  private _ngoList:any;

  constructor(public http: HttpClient, public events:Events) {
    console.log('Hello NgoApiProvider Provider');
    this._ngosRef = firebase.database().ref('ngos');
    this._ngosRef.on('child_added', this._onNgoAdded, this);
    this._ngos = new ReplaySubject();
  }
  
  //**** Api to create ngo */
  createNgo(ngo){
    return this._ngosRef.push(ngo).key;
  }

  getNgoDetailsById(ngoId){
    //Call API firebase
    // return result
  }

  getNGOListFromDb(){
    this._ngoListRef = firebase.database().ref('ngos');
    this._ngoListRef.once('value').then((snapshot)=>{
     this._ngoListObj = snapshot.val();
     //this._ngoList = Object.getOwnPropertyNames(this._ngoListObj);
     //console.log(Object.getOwnPropertyNames(this._ngoList));
      this.events.publish('ngoList-fetched');
    });
  }

  getNGOList():any{
    return this._ngoListObj;
  }


  _onNgoAdded(snap){
    try{
      let key = snap.key;
      let newNgo = snap.val();
      newNgo.id = key;
      this._ngos.next(newNgo);
    }catch(error){
      console.log('catching', error)
    }
  }
  
}
