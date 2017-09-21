import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the InternalAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-internal-address',
  templateUrl: 'internal-address.html',
})
export class InternalAddress {

  inforItems: any = [
    {
      tool:'电话',
      details:'13726451844'
    },
    {
      tool:'邮箱',
      details:'284579518@qq.com'
    },
    {
      tool:'员工编号',
      details:'IKE000254'
    },
    {
      tool:'Q Q',
      details:'316546741'
    },
    {
      tool:'微信',
      details:'274wbw'
    },
    {
      tool:'集团号',
      details:'233211'
    },
    {
      tool:'备注',
      details:'有事请打电话'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '13726451844',
      buttons: [
        {
          text: '呼叫',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '取消',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternalAddress');
  }

}
