import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ActionSheetController,
  AlertController,
  ModalController 
} from 'ionic-angular';

/**
 * Generated class for the PersonalinforPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-personalinfor',
  templateUrl: 'personalinfor.html',
})
export class Personalinfor {

  items: any = [
    {
      name:'姓名',
      infoName:'王博文'
    },
    {
      name:'性别',
      infoName:'男'
    },
    {
      name:'项目组',
      infoName:'一线实施体系'
    },
    {
      name:'职位',
      infoName:'UI设计师'
    }
  ];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {
  }

  // modal

  avatarActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: '请选择',
      buttons: [
        {
          text: '从相册上传',
          // handler: () => {
          //   this.moveDocumnetModal(documnet);
          //   console.log('Move clicked');
          // }
        }, {
          text: '拍照',
          // handler: () => {
          //   const navTransition = actionSheet.dismiss();
          //   navTransition.then(() => {
          //     this.renameDocumnet(documnet);
          //     console.log('Rename clicked');
          //   })
          // }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancle clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Personalinfor');
  }

}
