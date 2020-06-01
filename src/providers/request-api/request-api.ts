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
  }

  createRequest(requestInfo) {
    return this._requestRef.push(requestInfo).key;
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
        var requestStatus = 'Done'
        this._allNgoRequests[key].items.forEach(element => {
          title = title.concat(element.categoryName, ', ');
          if (element.itemStatus == 'pending') {
            requestStatus = element.itemStatus;
          }
        })
        title = title.substring(0, title.length - 2);
        request.requestTitle = title;
        request.requestStatus = requestStatus
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
        console.log('Removed Failed');
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
