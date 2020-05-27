import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class NgoApiProvider {

  private _ngosRef:any;
  private _ngos:any;

  constructor(public http: HttpClient) {
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
