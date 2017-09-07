import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reviewersDetails',
  templateUrl: 'reviewersDetails.html',
})
export class ReviewersDetailsPage {

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
      text: '凭证',
      postImageUrl: 'assets/imgs/check_pic1.png'
      
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReimdetailsPage');
  }

}
