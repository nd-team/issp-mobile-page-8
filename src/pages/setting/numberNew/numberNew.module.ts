import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberNew } from './numberNew';

@NgModule({
  declarations: [
    NumberNew,
  ],
  imports: [
    IonicPageModule.forChild(NumberNew),
  ],
  exports: [
    NumberNew
  ]
})
export class NumberNewModule {}
