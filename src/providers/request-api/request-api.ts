import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class RequestApiProvider {
  private _requestRef:any;
  private _requests:any;

  constructor(public http: HttpClient) {
    console.log('Hello RequestApiProvider Provider');
    this._requestRef = firebase.database().ref('ngo-requests');
    this._requestRef.on('child_added', this.onRequestAdded, this);
    this._requests = new ReplaySubject();
  }

  createRequest(requestInfo){
    return this._requestRef.push(requestInfo).key;
  }

  getAllRequestByNgoId(ngoId){
    var listRef = firebase.database().ref('ngo-requests/'+ngoId);
    listRef.once('value').then(snapshot => {
      console.log(snapshot.val());
    })
    console.log(listRef);
  }

  onRequestAdded(request){
    try{
      let key = request.key;
      let newRequest = request.val();
      newRequest.id = key;
      this._requests.next(newRequest);
      console.log('On Request added');
    }catch (error){
      console.log('error', error);
    }
  }

}
