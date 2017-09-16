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
  selector: 'page-external-other',
  templateUrl: 'external-other.html'
})


export class ExternalOther {

  otherItems: any = [
    {
      otherNews:'其他关联项目',
      details:'1461计划'
    },
    {
      otherNews:'联系时间频率',
      details:'一周一次'
    },
    {
      otherNews:'对外联系信息',
      details:'我想你永远不会知道'
    },
    {
      otherNews:'录入时间',
      details:'2017-08-21'
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExternalOther');
  }

}
