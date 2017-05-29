import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksDetails } from './books-details';

@NgModule({
  declarations: [
    BooksDetails,
  ],
  imports: [
    IonicPageModule.forChild(BooksDetails),
  ],
  exports: [
    BooksDetails
  ]
})
export class BooksDetailsModule {}
