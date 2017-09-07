import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReimbursementPage } from '../pages/reimbursement/reimbursement';
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';
import { ApplyreimbursementPage } from '../pages/applyreimbursement/applyreimbursement';
import { ReimdetailsPage } from '../pages/reimdetails/reimdetails';
import { ReviewersDetailsPage } from '../pages/reviewersDetails/reviewersDetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Home,
    // ReimbursementPage,
    ApplyreimbursementPage,
    ReimdetailsPage,
    ReviewersDetailsPage
    // SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:''
    }),
    SettingPageModule,
    ReimbursementPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    SettingPage,
    ReimbursementPage,
    ApplyreimbursementPage,
    ReimdetailsPage,
    ReviewersDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
