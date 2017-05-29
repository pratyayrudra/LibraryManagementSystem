import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAddingPage } from './book-adding-page';

@NgModule({
  declarations: [
    BookAddingPage,
  ],
  imports: [
    IonicPageModule.forChild(BookAddingPage),
  ],
  exports: [
    BookAddingPage
  ]
})
export class BookAddingPageModule {}
