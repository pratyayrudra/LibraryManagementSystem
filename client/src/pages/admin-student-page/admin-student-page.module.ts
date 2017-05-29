import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminStudentPage } from './admin-student-page';

@NgModule({
  declarations: [
    AdminStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminStudentPage),
  ],
  exports: [
    AdminStudentPage
  ]
})
export class AdminStudentPageModule {}
