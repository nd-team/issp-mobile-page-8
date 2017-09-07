import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewersDetailsPage } from './reviewersDetails';

@NgModule({
  declarations: [
    ReviewersDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewersDetailsPage),
  ],
  exports: [
    ReviewersDetailsPage
  ]
})
export class ReviewersDetailsPageModule {}
