import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneNumber } from './phone-number';

@NgModule({
  declarations: [
    PhoneNumber
  ],
  imports: [
    IonicPageModule.forChild(PhoneNumber),
  ],
  exports: [
    PhoneNumber
  ]
})
export class PhoneNumberModule {}
