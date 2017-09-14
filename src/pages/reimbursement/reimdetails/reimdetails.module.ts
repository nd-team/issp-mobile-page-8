import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReimdetailsPage } from './reimdetails';

@NgModule({
  declarations: [
    ReimdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReimdetailsPage),
  ],
  exports: [
    ReimdetailsPage
  ]
})
export class ReimdetailsPageModule {}
