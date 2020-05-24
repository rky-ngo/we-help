import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-create-ngo',
  templateUrl: 'create-ngo.html',
})
export class CreateNgoPage {

  private ngoForm:FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder:FormBuilder
    ) {
      this.ngoForm = this.formBuilder.group({
        name:['', Validators.required],
        description:['', Validators.required],
        phoneNumber:[''],
        location:[''],
        imageName:['']
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNgoPage');
  }

  createNgo(){
    // https://goo.gl/maps/Ly5UFcWLNFPX1pjG9
    console.log(this.ngoForm.value);
    // TODO: API to save ngo
    // Create new Request
  }

}
