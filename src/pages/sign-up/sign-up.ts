import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      phone:[''],
      ngoUser:false
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createUser(){
    console.log(this.userForm.value);
    // TODO: After successful creation of user 
    // if ngoUser true 
    //    Create New NGO
    // if ngoUser false
    //    Navigate to home page
  }

}
