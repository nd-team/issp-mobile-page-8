import { Component, ViewChildren, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';
import {Contacts} from '../../providers/contacts'

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
export class ContactsPage {
  pet: string = "internal";
  index: string = 'A';
  showModal: boolean = false;
  timeout: any;
  contacts: Array<any> = [];
  items = [];
  indexes: Array<string> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split('');
  offsetTops: Array<number> = [];
  isAndroid: boolean = false;
  groupName: string;

  @ViewChildren('IonItemGroup') ionItemGroup;
  @ViewChild(Content) content: Content;

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
    public ref: ChangeDetectorRef,
    public contactsSever: Contacts) {
    this.isAndroid = platform.is('android');

    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
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
  
  
  ionViewDidEnter() {
    this.getOffsetTops();
}

getOffsetTops() {
    this.offsetTops = this.ionItemGroup._results.map(ele => {
        return ele.nativeElement.offsetTop
    })
}

selectIndex(index: number) {
    this.index = this.indexes[index];
    const offsetTop = this.offsetTops[index];
    this.content.scrollTo(0, offsetTop, 300);
    this.createModal();
}


onScroll() {

    const threshold = 42;

    if (this.content.scrollTop < threshold) {
        this.index = this.indexes[0];
        return;
    }

    for (let i = this.offsetTops.length; i > 0; i--) {
        if (this.content.scrollTop + threshold >= this.offsetTops[i]) {
            this.index = this.indexes[i];
            this.ref.detectChanges();
            return;
        }
    }
}

createModal() {
    clearTimeout(this.timeout);
    this.showModal = true;
    this.timeout = setTimeout(() => {
        this.showModal = false;
        this.ref.detectChanges();
    }, 800)
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
