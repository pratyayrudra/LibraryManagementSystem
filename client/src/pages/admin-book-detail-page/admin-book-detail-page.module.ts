import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminBookDetailPage } from './admin-book-detail-page';

@NgModule({
  declarations: [
    AdminBookDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminBookDetailPage),
  ],
  exports: [
    AdminBookDetailPage
  ]
})
export class AdminBookDetailPageModule {}
