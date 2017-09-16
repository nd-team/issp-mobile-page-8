import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessAddress } from './business-address';

@NgModule({
  declarations: [
    BusinessAddress,
  ],
  imports: [
    IonicPageModule.forChild(BusinessAddress),
  ],
  exports: [
    BusinessAddress
  ]
})
export class BusinessAddressModule {}
