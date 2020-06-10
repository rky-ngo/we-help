import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NgoHomePage } from '../pages/ngo-home/ngo-home';
import { NgoRequestsPage } from '../pages/ngo-requests/ngo-requests';
import { UserDonatesPage } from '../pages/user-donates/user-donates';
import { AccountPage } from '../pages/account/account';
import { SupportPage } from '../pages/support/support';
import { AdminHomePage } from '../pages/admin-home/admin-home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  pages: Array<{title: string, iconName: string, component: any}>;
  public user:any = {
    name:'Ranganath SN'
  };
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    events:Events
  ) {
    this.initializeApp();

    // set our app's pages
    events.subscribe('public-user',(user)=>{
      this.user = user;
      this.pages = [
        { title: 'Home Page', iconName: 'home', component: HomePage},
        { title: 'My Donates', iconName: 'basket', component: UserDonatesPage}
      ];
      this.openPage({ title: 'Home Page', iconName: 'home', component: HomePage});
    });
    
    events.subscribe('ngo-user',(user)=>{
      this.user = user;
      this.pages = [
        { title: 'Ngo Home', iconName: 'home', component: NgoHomePage},
        { title: 'Requests', iconName: 'heart', component: NgoRequestsPage },
      ];
      this.openPage({ title: 'Ngo Home', iconName: 'home', component: NgoHomePage});
    });

    events.subscribe('admin', (user)=>{
      this.user = user;
      this.pages = [
        {title: 'Admin', iconName: 'home', component: AdminHomePage}
      ];
      this.openPage({title: 'Admin', iconName: 'home', component: AdminHomePage});
    })
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

  openAccountPage(){
    this.menu.close();
    this.nav.push(AccountPage);
  }

  openSupportPage(){
    this.menu.close();
    this.nav.push(SupportPage);
  }

  logout(){
    this.menu.close();
    this.nav.setRoot(LoginPage);
    this.nav.popToRoot();
  }
}
