import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo';
import firebase from 'firebase';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class UserInfoApiProvider {

  private _usersRef:any;
  private _users:any;
  public userType:string = "public";

  constructor(public http: HttpClient) {
    console.log('Hello UserInfoApiProvider Provider');
    this._usersRef = firebase.database().ref('users');
    //this._usersRef.on('child_added', this.onUserAdded, this);
    this._users = new ReplaySubject();
  }

  //**** Api to create user */
  createUser(userInfo){
    return this._usersRef.push(userInfo).key;
  }

  onUserAdded(user){
    try{
      let key = user.key;
      let newUser = user.val();
      newUser.id = key;
      this._users.next(newUser);
      console.log('On user added',newUser);
    }catch (error){
      console.log('error', error);
    }
  }

  setUserType(type){
    this.userType = type;
  }

  getUserType(){
    return this.userType;
  }

  getUserDetails(userName):UserInfo{
    //TODO: call api to get user details
    let userInfo:UserInfo = {
      id: '',
      name: 'Ranganath SN',
      ngoUser: true,
      phone: 9964322702,
      adminUser:false,
      password:'secret'
    }
    return userInfo;
  }


}
