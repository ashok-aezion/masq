import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NearbymasquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearbymasque',
  templateUrl: 'nearbymasque.html',
})
export class NearbymasquePage {
  items: any;
  itemsRoom:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =[
      {name:'mosque1',dis:'1.2km'},
      {name:'mosque20',dis:'1.5km'},
      {name:'mosque3',dis:'2km'},
      {name:'mosque4',dis:'2km'},
      {name:'mosque5',dis:'2.3km'}
    ]
    this.itemsRoom =[
      {name:'mosqueA',dis:'900m'},
      {name:'mosqueB',dis:'1.5km'},
      {name:'mosqueD',dis:'2km'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbymasquePage');
  }

}
