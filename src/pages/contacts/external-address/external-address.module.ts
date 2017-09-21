import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExternalAddress } from './external-address';
// import { ExternalOther } from './ExternalOther/ExternalOther'

@NgModule({
  declarations: [
    ExternalAddress,
  ],
  imports: [
    IonicPageModule.forChild(ExternalAddress),
  ],
  exports: [
    ExternalAddress
  ]
})
export class ExternalAddressModule {}
