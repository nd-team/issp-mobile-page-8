import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewReason } from './reviewReason';

@NgModule({
  declarations: [
    ReviewReason,
  ],
  imports: [
    IonicPageModule.forChild(ReviewReason),
  ],
  exports: [
    ReviewReason
  ]
})
export class ReviewReasonModule {}