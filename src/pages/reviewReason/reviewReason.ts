import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the MailingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reviewReason',
  templateUrl: 'reviewReason.html',
})
export class ReviewReason {

  items = [
    {
      time:'2017-09-11',
      description:'审核通过原因:符合标准'
    },
    {
      time:'2017-09-08',
      description:'分析通过原因:符合标准'
    },
    {
      time:'2017-09-06',
      description:'核对无误:已报销200元'
    },
    {
      time:'2017-09-02',
      description:'核对无误:已报销200元'
    }
  ];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailingPage');
  }


}