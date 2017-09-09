import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-borrow-return',
  templateUrl: 'borrow-return.html',
})
export class BorrowReturnPage {
  Iamges:any = [
    {
      id: 1,
      url: 'assets/imgs/userImage1.png'
    },
    {
      id: 2,
      url: 'assets/imgs/userImage2.png'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  confirm() :void {
    this.navCtrl.push('BorrowManagePage')
  }
  addImage() {
    let o:any = {id:this.Iamges.length,url:'assets/imgs/userImage2.png'};
    this.Iamges.push(o);
  }
  delImage(val:number) {
    this.Iamges.splice(val,1);
  }
  send() :void {
    this.navCtrl.push('BorrowSendPage');
  }
}
