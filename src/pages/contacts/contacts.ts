import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {
  pet: string = "internal";
  isAndroid: boolean = false;
  armenias: any =  [
    {
      imageUrl:'assets/imgs/avatar2.png',
      contactName:"艾佳",
      branch: '一线实施体系',
      post: '产品专员'
    },
    {
      imageUrl:'assets/imgs/avatar3.png',
      contactName:"艾米",
      branch: '一线实施体系',
      post: '前端工程师'
    },
    {
      imageUrl:'assets/imgs/avatar4.png',
      contactName:"爱媛",
      branch: '一线实施体系',
      post: '后台工程师'
    }
  ];
  outer: any =  [
    {
      imageUrl:'assets/imgs/avatar2.png',
      contactName:"爱如",
      branch: '一线实施体系',
      post: '产品专员'
    },
    {
      imageUrl:'assets/imgs/avatar3.png',
      contactName:"安拉琪",
      branch: '一线实施体系',
      post: '前端工程师'
    },
    {
      imageUrl:'assets/imgs/avatar4.png',
      contactName:"艾美",
      branch: '一线实施体系',
      post: '后台工程师'
    }
  ];

  businesses: any =  [
    {
      imageUrl:'assets/imgs/avatar2.png',
      contactName:"安琪拉",
      branch: '一线实施体系',
      post: '产品专员'
    },
    {
      imageUrl:'assets/imgs/avatar3.png',
      contactName:"爱鱼",
      branch: '一线实施体系',
      post: '前端工程师'
    },
    {
      imageUrl:'assets/imgs/avatar4.png',
      contactName:"艾美东",
      branch: '一线实施体系',
      post: '后台工程师'
    }
  ];

  letters: any = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ]
  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }
  
  openInternalPage(armenia) {
    this.navCtrl.push('InternalAddress', { armenia: armenia });
  }

  openOuternalPage(out) {
    this.navCtrl.push('ExternalAddress', { out: out });
  }

  openBusinessPage(business) {
    this.navCtrl.push('BusinessAddress', { business: business });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacts');
  }

}
