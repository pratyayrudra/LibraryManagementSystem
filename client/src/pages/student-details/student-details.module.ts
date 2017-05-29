import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetails } from './student-details';

@NgModule({
  declarations: [
    StudentDetails,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetails),
  ],
  exports: [
    StudentDetails
  ]
})
export class StudentDetailsModule {}
