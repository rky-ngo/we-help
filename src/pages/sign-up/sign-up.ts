import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { CreateNgoPage } from '../create-ngo/create-ngo';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  private userForm:FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder:FormBuilder) {
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      password:['', Validators.required],
      phone:['', Validators.required],
      ngoUser:false
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createUser(){
    console.log(this.userForm.value);
    if(this.userForm.value.ngoUser){
      this.navCtrl.push(CreateNgoPage);
    }else{
      this.navCtrl.push(HomePage)
      this.navCtrl.setRoot(HomePage);
    }
    
  }

}
