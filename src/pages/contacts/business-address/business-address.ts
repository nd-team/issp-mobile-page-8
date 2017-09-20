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
  selector: 'page-business-address',
  templateUrl: 'business-address.html'
})

export class BusinessAddress {

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
      tool:'客户来源',
      details:'推荐'
    },
    {
      tool:'关系程度',
      details:'很好'
    },
    {
      tool:'重要性级别',
      details:'中'
    },
    {
      tool:'地区',
      details:'广州'
    },
    {
      tool:'第一介绍人',
      details:'孟小宝'
    },
    {
      tool:'备注',
      details:'有事请打电话'
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    ) {
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

  businessOther(){
    this.navCtrl.push('BusinessOther');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessAddress');
  }

}
