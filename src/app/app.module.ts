import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { NgoDetailPage } from '../pages/ngo-detail/ngo-detail';
import { AboutTabPage } from '../pages/about-tab/about-tab';
import { RequestsTabPage } from '../pages/requests-tab/requests-tab';
import { DonateItemListPage } from '../pages/donate-item-list/donate-item-list';
import { DonatePage } from '../pages/donate/donate';
import { NgoApiProvider } from '../providers/ngo-api/ngo-api';
import { RequestApiProvider } from '../providers/request-api/request-api';
import { ItemInfoApiProvider } from '../providers/item-info-api/item-info-api';
import { UserInfoApiProvider } from '../providers/user-info-api/user-info-api';
import { DonateInfoApiProvider } from '../providers/donate-info-api/donate-info-api';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { CreateNgoPage } from '../pages/create-ngo/create-ngo';
import { NgoHomePage } from '../pages/ngo-home/ngo-home';
import { HttpClientModule } from '@angular/common/http';
import { NgoRequestsPage } from '../pages/ngo-requests/ngo-requests';
import { NgoPendingRequestsTabPage } from '../pages/ngo-pending-requests-tab/ngo-pending-requests-tab';
import { NgoCompletedRequestsTabPage } from '../pages/ngo-completed-requests-tab/ngo-completed-requests-tab';
import firebase from 'firebase';
import { local } from '../environments/local';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CategoryListPage } from '../pages/category-list/category-list';
import { ItemListPage } from '../pages/item-list/item-list';
import { PostRequestPage } from '../pages/post-request/post-request';
import { NgoRequestItemsPage } from '../pages/ngo-request-items/ngo-request-items';
import { Geolocation } from '@ionic-native/geolocation';
import { LoacationPage } from '../pages/loacation/loacation';
import { UserDonatesPage } from '../pages/user-donates/user-donates';
import { AccountPage } from '../pages/account/account';
import { SupportPage } from '../pages/support/support';

firebase.initializeApp(local.firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    NgoDetailPage,
    AboutTabPage,
    RequestsTabPage,
    DonateItemListPage,
    DonatePage,
    LoginPage,
    SignUpPage,
    CreateNgoPage,
    NgoHomePage,
    NgoRequestsPage,
    NgoPendingRequestsTabPage,
    NgoCompletedRequestsTabPage,
    CategoryListPage,
    ItemListPage,
    PostRequestPage,
    NgoRequestItemsPage,
    LoacationPage,
    UserDonatesPage,
    AccountPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(local.firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    NgoDetailPage,
    AboutTabPage,
    RequestsTabPage,
    DonateItemListPage,
    DonatePage,
    LoginPage,
    SignUpPage,
    CreateNgoPage,
    NgoHomePage,
    NgoRequestsPage,
    NgoPendingRequestsTabPage,
    NgoCompletedRequestsTabPage,
    CategoryListPage,
    ItemListPage,
    PostRequestPage,
    NgoRequestItemsPage,
    LoacationPage,
    UserDonatesPage,
    AccountPage,
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NgoApiProvider,
    RequestApiProvider,
    ItemInfoApiProvider,
    UserInfoApiProvider,
    DonateInfoApiProvider,
    Geolocation
  ]
})
export class AppModule {}
