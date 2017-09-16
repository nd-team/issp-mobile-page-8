import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternalAddress } from './internal-address';

@NgModule({
  declarations: [
    InternalAddress,
  ],
  imports: [
    IonicPageModule.forChild(InternalAddress),
  ],
  exports: [
    InternalAddress
  ]
})
export class InternalAddressModule {}
