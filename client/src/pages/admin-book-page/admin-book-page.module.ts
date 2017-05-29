import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminBookPage } from './admin-book-page';

@NgModule({
  declarations: [
    AdminBookPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminBookPage),
  ],
  exports: [
    AdminBookPage
  ]
})
export class AdminBookPageModule {}
