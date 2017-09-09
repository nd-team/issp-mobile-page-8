import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-applyborrowmoney',
  templateUrl: 'applyborrowmoney.html',
})
export class ApplyborrowmoneyPage {
  aa:string = '2017-08-17';
  items: Array<{ title: string, message?: (any), page?: any }>;
  Iamges:any = [
    {
      id: 1,
      url: 'assets/imgs/userImage1.png'
    },
    {
      id: 2,
      url: 'assets/imgs/userImage1.png'
    },
    {
      id: 3,
      url: 'assets/imgs/userImage2.png'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        title:'借款人',
        page:'2',
        message:'王博文'
      },
      {
        title:'借款方式',
        page:'3',
        message:'现金'
      },
      {
        title:'负责人',
        page:'4',
        message:'孟小宝'
      },
      {
        title:'地区',
        page:'5',
        message:'广州'
      },
      {
        title:'项目名称',
        page:'5',
        message:'人员租聘'
      },
      {
        title:'三级科目',
        page:'5',
        message:'很多三级'
      }
    ];
  }

  ionViewDidLoad() {
    
  }
  addImage() {
    let o:any = {id:this.Iamges.length,url:'assets/imgs/userImage2.png'};
    this.Iamges.push(o);
  }
  delImage(val:number) {
    this.Iamges.splice(val,1);
  }

}
