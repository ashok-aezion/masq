import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MymosquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mymosque',
  templateUrl: 'mymosque.html',
})

export class MymosquePage {
  pet:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = 'kittens';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MymosquePage');
  }

}
