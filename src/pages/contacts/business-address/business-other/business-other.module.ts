import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessOther } from './business-other';

@NgModule({
  declarations: [
    BusinessOther,
  ],
  imports: [
    IonicPageModule.forChild(BusinessOther),
  ],
  exports: [
    BusinessOther
  ]
})
export class BusinessOtherModule {}
