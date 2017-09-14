import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MailingPage } from '../mailing/mailing';
import { ReviewReason } from '../reviewReason/reviewReason';


@IonicPage()
@Component({
  selector: 'page-reimdetails',
  templateUrl: 'reimdetails.html',
})
export class ReimdetailsPage {
  status: string;
  statusColor:string;
  isAuditor:boolean = true;//是否为审核人员
  buttonName:string;
  items = [
    {
      Immutable: '报销单号',
      variable:'BX20171445'
    },
    {
      Immutable: '发生时间',
      variable:'2017-09-05'
    },
    {
      Immutable: '报销金额',
      variable:'200（元）'
    },
    {
      Immutable: '单据数量',
      variable:'1'
    },
    {
      Immutable: '地区',
      variable:'广州'
    },
    {
      Immutable: '项目名称',
      variable:'高薪企业资质'
    },
    {
      Immutable: '负责人',
      variable:'孟小宝'
    },
    {
      Immutable: '当天任务',
      variable:'企业文化宣传'
    },
    {
      Immutable: '一级科目',
      variable:'营业外支出'
    },
    {
      Immutable: '二级科目',
      variable:'罚款'
    },
    {
      Immutable: '三级科目',
      variable:'交通罚款'
    },
    {
      Immutable: '参与人',
      variable:'孟小宝'
    },{
      Immutable: '是否有发票',
      variable:'有'
    },
    {
      Immutable: '无发票说明',
      variable:'无'
    },
    {
      Immutable: '补充说明',
      variable:'请看大屏幕'
    }
  ];

  posts = [
    {
      Immutable: '收件人',
      variable:'王博文'
    },
    {
      Immutable: '寄件时间',
      variable:'2017-08-21'
    },
    {
      Immutable: '地址',
      variable:'广东省广州市天河区冠达商务中心112'
    },
    {
      Immutable: '备注',
      variable:'收到货记得发短信给我'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = navParams.get('name');
    switch(this.status){
          case '待审核':
            this.statusColor = 'orange';
            this.buttonName = this.isAuditor? '去寄件':'去审核';
            break;
          case '待分析':
            this.statusColor = 'danger';
            this.buttonName = '去分析';
            break;
          case '待核对':
            this.statusColor = 'green';
            this.buttonName = '核对有误';
            break;
          case '待核对':
            this.statusColor = 'green';
            this.buttonName = '去付款';
            break;
          case '已报销':
            this.statusColor = 'blue';
            break;
          case '待解冻':
            this.statusColor = 'light';
            this.buttonName = '重新编辑提交';
            break;
        }
  }

  send(){
    this.navCtrl.push('MailingPage');
  }
  itemReason() {
    this.navCtrl.push('ReviewReason');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReimdetailsPage');
  }
  buttonFn(status:string):void {
    if(status == '待还款'){
      this.navCtrl.push('BorrowReturnPage');
    }
  }
}
