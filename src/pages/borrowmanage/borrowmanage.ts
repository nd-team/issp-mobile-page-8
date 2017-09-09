import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-borrowmanage',
  templateUrl: 'borrowmanage.html',
})
export class BorrowManagePage {
  private show :boolean = false;
  private index : number = 0;
  private seleFont :string;
  private statusList :any;
  private items :any = [
    {
      value:'全部'
    },
    {
      value:'待审核'
    },
    {
      value:'待付款'
    },
    {
      value:'已借款'
    },
    {
      value:'已还款'
    },
    {
      value:'待解冻'
    }
  ];
  private status : any = [
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-22',
      date:'2017-08-31',
      currentStatus:'待审核'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-23',
      date:'2017-08-31',
      currentStatus:'待付款'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-24',
      date:'2017-08-31',
      currentStatus:'待还款'
    },
    {
      nameWipe:'胡程威的借款',
      wipeTime:'借款发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已还款'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已借款'
    },
    {
      nameWipe:'胡程威的借款',
      wipeTime:'借款发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已还款'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已借款'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-26',
      date:'2017-08-31',
      currentStatus:'待解冻'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-25',
      date:'2017-08-31',
      currentStatus:'已借款'
    },
    {
      nameWipe:'王博文的借款',
      wipeTime:'借款发生时间：2017-08-26',
      date:'2017-08-31',
      currentStatus:'待解冻'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 0;i < this.status.length; i++){
      let currentColor =this.status[i].currentStatus
        switch(currentColor){
          case '待审核':
            this.status[i].color = 'orange'
            break;
          case '待付款':
            this.status[i].color = 'red'
            break;
          case '待还款':
            this.status[i].color = 'green'
            break;
          case '已还款':
            this.status[i].color = 'blue'
            break;
          case '已借款':
            this.status[i].color = 'Gcolor'
            break;
          case '待解冻':
            this.status[i].color = 'grey'
            break;
        }
    }
  }

  ionViewDidLoad() {
    this.statusList = this.status;
  }
  selectFilter(i:number,val:string) :any {
    this.show = !this.show;
    this.index = i;
    this.seleFont = val;
    if (val && val.trim() != '') {
      this.statusList = this.status.filter((item) => { 
        if(val == '全部')return item;
        if(item.currentStatus == val){
          return item;
        }
      })
    }
  }
  toPage() {
    this.navCtrl.push('ApplyborrowmoneyPage');
  }
  goDetail(name:string) {
    this.navCtrl.push('BorrowDetailPage',{name:name});
  }
}
