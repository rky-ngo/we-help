import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Events } from 'ionic-angular';

@Injectable()
export class RequestApiProvider {
  private _requestRef: any;
  private _requests: any;
  private _allNgoRequests: any;

  constructor(public http: HttpClient, private events: Events) {
    console.log('Hello RequestApiProvider Provider');
    this._requestRef = firebase.database().ref('ngo-requests');
    this._requestRef.on('child_added', this.onRequestAdded, this);
    this._requests = new ReplaySubject();
    this.events.subscribe('user-donated', (requestInfo, donateId) =>{
      this.updateRequest(requestInfo, donateId);
    })
  }

  createRequest(requestInfo) {
    return this._requestRef.push(requestInfo).key;
  }

  updateRequest(requestInfo, donateId){
    var requestToUpdateRef = this._requestRef.child(requestInfo.requestId);
    var request:any;
    requestToUpdateRef.on('value', function(snapshot) {
      request = snapshot.val();
      request.requestStatus = 'Done';
      request['userDonateId'] = donateId;
    });
    requestToUpdateRef.set(request);
    console.log('Request Updated',request);
  }

  loadAllRequests() {
    this._requestRef.once('value').then(snapshot => {
      console.log(snapshot.val());
      this._allNgoRequests = snapshot.val();
      this.events.publish('ngo-requests-loaded')
    });
  }

  getAllRequestByNgoId(ngoId) {
    var requests = [];
    var keys = Object.keys(this._allNgoRequests);
    keys.forEach(key => {
      if (this._allNgoRequests[key].ngoId == ngoId) {
        var request = {
          requestId: key,
          requestTitle: '',
          requestItems: this._allNgoRequests[key].items,
          requestStatus: '',
          selectedForDelete: false
        }
        var title = '';
        this._allNgoRequests[key].items.forEach(element => {
          title = title.concat(element.categoryName, ', ');
        });
        title = title.substring(0, title.length - 2);
        request.requestTitle = title;
        request.requestStatus = this._allNgoRequests[key].requestStatus;
        requests.push(request);
      }
    });
    return requests;
  }

  deleteRequests(requestsTobeDeleted) {
    requestsTobeDeleted.forEach(request => {
      this._requestRef.child('/' + request.requestId).remove().then(function () {
        console.log('Removed Success');
      }).catch(function (error) {
        console.log('Removed Failed', error);
      });
    })

  }

  onRequestAdded(request) {
    try {
      let key = request.key;
      let newRequest = request.val();
      newRequest.id = key;
      this._requests.next(newRequest);
      console.log('On Request added');
    } catch (error) {
      console.log('error', error);
    }
  }

}
