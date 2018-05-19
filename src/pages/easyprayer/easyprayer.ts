import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController, ViewController } from 'ionic-angular';

/**
 * Generated class for the EasyprayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-easyprayer',
  templateUrl: 'easyprayer.html',
})
export class EasyprayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EasyprayerPage');
  }
  presentPopover() {
    let popover = this.popoverCtrl.create('MypopupPage');
    popover.present();
  }
  goToNear(){
    this.navCtrl.push('NearbymasquePage');
  }
}
