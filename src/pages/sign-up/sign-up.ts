import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { CreateNgoPage } from '../create-ngo/create-ngo';
import { UserInfoApiProvider } from '../../providers/user-info-api/user-info-api';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  private userForm:FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder:FormBuilder,
    private userInfoApi:UserInfoApiProvider,
    private toast:ToastController,
    private events:Events) {
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      ngoUser:false,
      adminUser:false
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createUser(){
    let newUser = this.userForm.value;
    console.log('Sign up - new user', newUser);
    let key = this.userInfoApi.createUser(newUser);
    if(key){
      let toastopen = this.toast.create({
        message: 'User created successfully',
        duration:3000
      });
      toastopen.onDidDismiss(() => {
        if(this.userForm.value.ngoUser){
          this.navCtrl.push(CreateNgoPage, newUser);
        }else{
          this.navCtrl.push(HomePage)
          this.navCtrl.setRoot(HomePage);
          this.events.publish('public-user');
        }
      });
      toastopen.present();
    }
    
    
  }

}
