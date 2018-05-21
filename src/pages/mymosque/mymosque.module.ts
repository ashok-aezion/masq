import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymosquePage } from './mymosque';

@NgModule({
  declarations: [
    MymosquePage,
  ],
  imports: [
    IonicPageModule.forChild(MymosquePage),
  ],
})
export class MymosquePageModule {}
