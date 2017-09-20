import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import { InternalAddressModule } from './internal-address/internal-address.module';
import { ExternalAddressModule } from './external-address/external-address.module';
import { BusinessAddressModule } from './business-address/business-address.module';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsPage),
    InternalAddressModule,
    ExternalAddressModule,
    BusinessAddressModule,
    SharedModule
  ],
  exports: [
    ContactsPage
  ]
})
export class ContactsPageModule {}
