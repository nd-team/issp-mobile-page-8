import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReimbursementPage } from '../reimbursement/reimbursement';


@IonicPage()
@Component({
  selector: 'page-applyreimbursement',
  templateUrl: 'applyreimbursement.html',
})
export class ApplyreimbursementPage {
  fixed1 = '2017-08-22';
  person: string = "王博文";
  principal: string = "胡歌";
  area: string = "广州";
  projectName: string = "1461项目规划";
  subjects: string = "人员租赁";
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyreimbursementPage');
  }
  todo = {
    description:"例如:交代清楚报销事由"
  };
  
  logForm(form){
    console.log(form.value)
  }
  submit(){
    this.navCtrl.push(ReimbursementPage);
  }
  addImage() {
    let o:any = {id:this.Iamges.length,url:'assets/imgs/userImage2.png'};
    this.Iamges.push(o);
  }
  delImage(val:number) {
    this.Iamges.splice(val,1);
  }
}
