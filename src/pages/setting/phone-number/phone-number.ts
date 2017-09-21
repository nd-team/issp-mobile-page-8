import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NumberNew } from '../numberNew/numberNew';

@IonicPage()
@Component({
  selector: 'page-phone-number',
  templateUrl: 'phone-number.html',
})
export class PhoneNumber {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next() {
    this.navCtrl.push('NumberNew');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneNumber');
  }

}
