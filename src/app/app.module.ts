import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { SettingPageModule } from '../pages/setting/setting.module';

//报销
import { ReimbursementPageModule } from '../pages/reimbursement/reimbursement.module';

// 报销
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccordionListPageModule } from '../pages/accordion-list/accordion-list.module';

//借款
import { BorrowManagePage } from '../pages/borrowmanage/borrowmanage';
import { BorrowManagePageModule } from '../pages/borrowmanage/borrowmanage.module';
import { ApplyborrowmoneyPage } from '../pages/applyborrowmoney/applyborrowmoney';
import { ApplyborrowmoneyPageModule } from '../pages/applyborrowmoney/applyborrowmoney.module';
import { BorrowDetailPageModule } from '../pages/borrow-detail/borrow-detail.module';
import { BorrowReturnPageModule } from '../pages/borrow-return/borrow-return.module';


//通讯录
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { ToastService } from '../providers/util/toast.service';
import { HttpModule } from '@angular/http';
import { Contacts } from '../providers/contacts';

// modals
// import { ExternalAddress as  ModalContentPage } from '../pages/contacts/external-address/external-address';
@NgModule({
  declarations: [
    MyApp,
    Home
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:''
    },
    // {
    //   links: [
    //     { component: ModalContentPage, name:'ModalContentPage', segment:'modal-content'}
    //   ]
    // }
  ),
    SettingPageModule,
    ReimbursementPageModule,
    BorrowManagePageModule,
    BorrowDetailPageModule,
    ApplyborrowmoneyPageModule,
    AccordionListPageModule,
    ContactsPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastService,
    Contacts
  ]
})
export class AppModule {}
