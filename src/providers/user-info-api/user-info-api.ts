import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo';

@Injectable()
export class UserInfoApiProvider {

  public userType:string = "public";

  constructor(public http: HttpClient) {
    console.log('Hello UserInfoApiProvider Provider');
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
      name: 'Ranganath SN',
      ngoUser: true,
      phone: 9964322702,
      adminUser:false,
      password:'secret'
    }
    return userInfo;
  }


}
