import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InternalAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-business-other',
  templateUrl: 'business-other.html'
})


export class BusinessOther {

  otherItems: any = [
    {
      otherNews:'岗位',
      details:'项目经理'
    },
    {
      otherNews:'职权',
      details:'管理'
    },
    {
      otherNews:'职级',
      details:'管理层'
    },
    {
      otherNews:'微信',
      details:'20170821'
    },
    {
      otherNews:'Q Q',
      details:'2017082123'
    },
    {
      otherNews:'座机',
      details:'020-2342-3214'
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessOther');
  }

}
