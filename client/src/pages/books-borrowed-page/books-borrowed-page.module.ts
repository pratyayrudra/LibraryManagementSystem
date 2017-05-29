import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksBorrowedPage } from './books-borrowed-page';

@NgModule({
  declarations: [
    BooksBorrowedPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksBorrowedPage),
  ],
  exports: [
    BooksBorrowedPage
  ]
})
export class BooksBorrowedPageModule {}
