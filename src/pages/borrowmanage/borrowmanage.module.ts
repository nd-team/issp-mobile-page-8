import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowManagePage } from './borrowmanage';
import { BorrowReturnPageModule } from '../borrow-return/borrow-return.module';
import { BorrowSendPageModule } from '../borrow-send/borrow-send.module';

@NgModule({
  declarations: [
    BorrowManagePage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowManagePage),
    BorrowReturnPageModule,
    BorrowSendPageModule
  ],
  exports: [
    BorrowManagePage
  ],
})
export class BorrowManagePageModule {}
