import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { PersonalinforModule } from '../personalinfor/personalinfor.module';
import { PhoneNumberModule } from '../phone-number/phone-number.module';
// import { NumberNewModule } from '../numberNew/numberNew.module';


@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
    PersonalinforModule,
    PhoneNumberModule,
    // NumberNewModule
  ],
  exports: [
    SettingPage,
  ]
})
export class SettingPageModule {}
