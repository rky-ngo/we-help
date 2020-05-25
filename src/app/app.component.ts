import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, Events } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { CreateNgoPage } from '../pages/create-ngo/create-ngo';
import { UserInfoApiProvider } from '../providers/user-info-api/user-info-api';
import { NgoHomePage } from '../pages/ngo-home/ngo-home';
import { NgoPendingRequestsTabPage } from '../pages/ngo-pending-requests-tab/ngo-pending-requests-tab';
import { NgoRequestsPage } from '../pages/ngo-requests/ngo-requests';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage:any = LoginPage;
  pages: Array<{title: string, iconName: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    public userInfoApi: UserInfoApiProvider, 
    events:Events
  ) {
    this.initializeApp();

    // set our app's pages
    events.subscribe('public-user',()=>{
      this.pages = [
        { title: 'Home Page', iconName: 'home', component: HomePage},
        { title: 'Favorites', iconName: 'heart', component: HelloIonicPage },
        { title: 'Your Donates', iconName: 'basket', component: HomePage},
        { title: 'Login', iconName: 'key', component:LoginPage},
        { title: 'SignUp', iconName: 'key', component:SignUpPage},
        { title: 'CreateNgoPage', iconName: 'key', component:CreateNgoPage}
      ];
      this.openPage({ title: 'Home Page', iconName: 'home', component: HomePage});
    });
    
    events.subscribe('ngo-user',()=>{
      this.pages = [
        { title: 'Ngo Home', iconName: 'home', component: NgoHomePage},
        { title: 'Requests', iconName: 'heart', component: NgoRequestsPage }
      ];
      this.openPage({ title: 'Ngo Home', iconName: 'home', component: NgoHomePage});
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
    this.nav.setRoot(page.component);
  }
}
