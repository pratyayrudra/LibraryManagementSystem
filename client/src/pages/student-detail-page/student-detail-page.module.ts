import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailPage } from './student-detail-page';

@NgModule({
  declarations: [
    StudentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailPage),
  ],
  exports: [
    StudentDetailPage
  ]
})
export class StudentDetailPageModule {}
