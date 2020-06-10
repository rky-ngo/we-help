import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo';
import firebase from 'firebase';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class UserInfoApiProvider {

  private _usersRef:any;
  private _users:any;
  private _allUsers:any;
  private _allUsersKey = [];
  public userType:string = "public";
  private loggedInUser:UserInfo;

  constructor(public http: HttpClient) {
    console.log('Hello UserInfoApiProvider Provider');
    this._usersRef = firebase.database().ref('users');
    this._usersRef.on('child_added', this.onUserAdded, this);
    this._users = new ReplaySubject();
    this._usersRef.once('value').then(snapshot => {
      this._allUsers = snapshot.val();
      this._allUsersKey = Object.keys(this._allUsers);
    })
  }

  //**** Api to create user */
  createUser(userInfo){
    var key = this._usersRef.push(userInfo).key;
    this.loggedInUser = {
      id: key,
      name: userInfo.name,
      ngoUser: userInfo.ngoUser,
      phone: userInfo.phone,
      adminUser:false,
      password:userInfo.password
    };
    return key;
  }

  onUserAdded(user){
    try{
      let key = user.key;
      let newUser = user.val();
      newUser.id = key;
      this._users.next(newUser);
      console.log('On user added',newUser);
      this._usersRef.once('value').then(snapshot => {
        this._allUsers = snapshot.val();
        this._allUsersKey = Object.keys(this._allUsers);
      });
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

  getLoggedInUserDetails(){
    return this.loggedInUser;
  }

  getUserDetails(userName, password):UserInfo{
    let userInfo:UserInfo;
    this._allUsersKey.forEach(key=>{
      var user = this._allUsers[key];
      if(user.name == userName && user.password == password){
        userInfo = {
          id: key,
          name: user.name,
          ngoUser: user.ngoUser,
          phone: user.phone,
          adminUser:false,
          password:user.password
        }
      }
    });
    this.loggedInUser = userInfo;
    return userInfo;
  }
}
