import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';

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
  index: string = 'A';
  showModal: boolean = false;
  timeout: any;
  contacts: Array<any> = [];
  items = [];
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  isAndroid: boolean = false;

  @ViewChildren('IonItemGroup') IonItemGroup;
  @ViewChild(Content) content: Content;
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

  constructor(
    platform: Platform, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: ToastService,
    public ref: ChangeDetectorRef) {
    this.isAndroid = platform.is('android');

    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }

    // for(let i = 0;i < this.contacts.length; i++){
    //   let currentColor =this.contacts[i].currentStatus
    //     switch(currentColor){
    //       case 'NONE':
    //       this.contacts[i].color = ''
    //       break;
    //       case 'MAN':
    //         this.contacts[i].color = 'energy'
    //         break;
    //       case 'WOMAN':
    //         this.contacts[i].color = 'womenColor'
    //         break;
    //     }
    // }
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
    this.http.get('internalcontacts/v1/mobile/list')
    .then( res => {
      this.contacts = res.data;
      console.log(this.contacts);
    })
    // console.log('ionViewDidLoad Contacts');
  } 
  
  doInfinite(infiniteScroll) {
    // console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
