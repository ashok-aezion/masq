import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocialhubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialhub',
  templateUrl: 'socialhub.html',
})
export class SocialhubPage {
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
      '1','2','3','4'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialhubPage');
  }
  newPost(){
    this.navCtrl.push('NewpostPage');
  }
}
