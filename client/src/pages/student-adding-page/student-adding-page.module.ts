import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAddingPage } from './student-adding-page';

@NgModule({
  declarations: [
    StudentAddingPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAddingPage),
  ],
  exports: [
    StudentAddingPage
  ]
})
export class StudentAddingPageModule {}
