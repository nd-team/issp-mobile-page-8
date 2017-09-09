import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyborrowmoneyPage } from './applyborrowmoney';

@NgModule({
  declarations: [
    ApplyborrowmoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyborrowmoneyPage),
  ],
  exports: [
    ApplyborrowmoneyPage
  ]
})
export class ApplyborrowmoneyPageModule {}
