import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Adminlogin } from './adminlogin';

@NgModule({
  declarations: [
    Adminlogin,
  ],
  imports: [
    IonicPageModule.forChild(Adminlogin),
  ],
  exports: [
    Adminlogin
  ]
})
export class AdminloginModule {}
