import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  payWay: string = '现金';
  sendTime = '2017-09-08'; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailingPage');
  }

  successAlert(){
    let alert = this.alertCtrl.create({
      title:'付款成功',
      buttons: ['Ok']

    });
    alert.present()
  }
}
