import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Payment } from '../payment/payment';

/**
 * Generated class for the MailingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class Payment {
  person: string = '王博文';
  sendTime = '2017-09-08'; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailingPage');
  }

  // confirm(){
  //   this.navCtrl.push(SendDetails);
  // }
}
