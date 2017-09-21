import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Personalinfor } from './personalinfor';

@NgModule({
  declarations: [
    Personalinfor,
  ],
  imports: [
    IonicPageModule.forChild(Personalinfor),
  ],
  exports: [
    Personalinfor
  ]
})
export class PersonalinforModule {}
