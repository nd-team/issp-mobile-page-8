import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-borrow-detail',
  templateUrl: 'borrow-detail.html',
})
export class BorrowDetailPage {
  status:string;
  statusColor:string;
  isAuditor:boolean = true;//是否为审核人员
  buttonName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = navParams.get('name');
    switch(this.status){
          case '待审核':
            this.statusColor = 'orange';
            this.buttonName = '去审核';
            break;
          case '待付款':
            this.statusColor = 'red';
            this.buttonName = '去付款';
            break;
          case '待还款':
            this.statusColor = 'green';
            this.buttonName = '去还款';
            break;
          case '已还款':
            this.statusColor = 'blue';
            this.buttonName = '确认收款';
            break;
          case '已借款':
            this.statusColor = 'Gcolor'
            break;
          case '待解冻':
            this.statusColor = 'grey';
            this.buttonName = '重新编辑提交';
            break;
        }
     
}

  ionViewDidLoad() {
    
  }
  buttonFn(status:string):void {
    if(status == '待还款'){
      this.navCtrl.push('BorrowReturnPage');
    }
  }
}
