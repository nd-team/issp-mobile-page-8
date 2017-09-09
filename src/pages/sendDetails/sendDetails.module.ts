import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendDetails } from './sendDetails';

@NgModule({
  declarations: [
    SendDetails,
  ],
  imports: [
    IonicPageModule.forChild(SendDetails),
  ],
  exports: [
    SendDetails
  ]
})
export class ReimdetailsPageModule {}
