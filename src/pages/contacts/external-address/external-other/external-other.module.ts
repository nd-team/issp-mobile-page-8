import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExternalOther } from './external-other';

@NgModule({
  declarations: [
    ExternalOther,
  ],
  imports: [
    IonicPageModule.forChild(ExternalOther),
  ],
  exports: [
    ExternalOther
  ]
})
export class ExternalOtherModule {}
