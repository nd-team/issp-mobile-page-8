import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reimbursed } from './reimbursed';


@NgModule({
  declarations: [
    Reimbursed,
  ],
  imports: [
    IonicPageModule.forChild(Reimbursed),
  ],
  exports: [
    Reimbursed
  ]
})
export class ReimbursedModule {}
