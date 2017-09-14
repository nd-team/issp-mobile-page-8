import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  rootPage: any;
  items: Array<{ title: string, page?: any }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = 'SettingPage';
    this.items = [
      {
        title: '修改手机号码',
        page : 'PhoneNumber'
      },
      {
        title: '修改登录密码',
        page : 'SlidingItemPage'
      }
    ];
  }
  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
