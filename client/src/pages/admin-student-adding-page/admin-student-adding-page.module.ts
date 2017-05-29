import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminStudentAddingPage } from './admin-student-adding-page';

@NgModule({
  declarations: [
    AdminStudentAddingPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminStudentAddingPage),
  ],
  exports: [
    AdminStudentAddingPage
  ]
})
export class AdminStudentAddingPageModule {}
