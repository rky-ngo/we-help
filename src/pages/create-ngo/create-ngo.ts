import { Component } from '@angular/core';
import { NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgoHomePage } from '../ngo-home/ngo-home';
import { NgoApiProvider } from '../../providers/ngo-api/ngo-api';
import { Ngo } from '../../models/ngo';

@Component({
  selector: 'page-create-ngo',
  templateUrl: 'create-ngo.html',
})
export class CreateNgoPage {

  private ngoForm:FormGroup;
  private newNgo:Ngo;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder:FormBuilder,
    public ngoApi:NgoApiProvider,
    private alertCtrl:AlertController,
    private events:Events
    ) {
      this.ngoForm = this.formBuilder.group({
        name:['', Validators.required],
        description:['', Validators.required],
        phoneNumber:[''],
        location:[''],
        imageName:['']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNgoPage');
  }

  createNgo(){
    console.log(this.ngoForm.value);
    console.log('user details passed', this.navParams.data);
    let ngo = {
      name:this.ngoForm.value.name,
      description: this.ngoForm.value.description,
      phoneNumber: this.ngoForm.value.phoneNumber,
      requests: [],
      location:{
        latitude:"",
        longitude:"",
      },
      userInfo:this.navParams.data,
      imageName:'default.jpg',
      status:'Inactive'
    }
    this.newNgo = ngo;

    let key = this.ngoApi.createNgo(this.newNgo);

    if (key) {

      let alert = this.alertCtrl.create({
        title: 'Ngo registered successfully',
        subTitle: 'Welcome to NGO-Donor Connect',
        buttons: ['Ok']
      });
      alert.onDidDismiss(() => {
        this.events.publish('ngo-user', this.navParams.data);
        this.navCtrl.push(NgoHomePage, key);
        this.navCtrl.setRoot(NgoHomePage, key);
      });
      alert.present();
    }

    // if(key){
    //   let toastopen = this.toast.create({
    //     message: 'Ngo registered successfully',
    //     duration:3000
    //   });
    //   toastopen.onDidDismiss(() => {
    //     this.events.publish('ngo-user', this.navParams.data);
    //     this.navCtrl.push(NgoHomePage, key);
    //     this.navCtrl.setRoot(NgoHomePage, key);
    //   });
    //   toastopen.present();
    // }
  }
}
