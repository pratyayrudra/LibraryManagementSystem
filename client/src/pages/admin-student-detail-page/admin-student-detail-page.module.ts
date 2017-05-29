import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminStudentDetailPage } from './admin-student-detail-page';

@NgModule({
  declarations: [
    AdminStudentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminStudentDetailPage),
  ],
  exports: [
    AdminStudentDetailPage
  ]
})
export class AdminStudentDetailPageModule {}
