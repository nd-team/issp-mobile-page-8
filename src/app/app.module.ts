import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPage } from '../pages/reimbursement/reimbursement';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { ApplyreimbursementPage } from '../pages/applyreimbursement/applyreimbursement';
import { SharedModule } from './shared.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MultiPickerModule } from 'ion-multi-picker';
import { PROVIDERS } from './imports';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ApplyreimbursementPage
  ], 
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      cancelButton:' 取消'
    }),
    SettingPageModule,
    ReimbursementPageModule,
    MultiPickerModule ,
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingPage,
    ReimbursementPage,
    ApplyreimbursementPage,
  ],
  providers: [
    StatusBar,
    PROVIDERS,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
