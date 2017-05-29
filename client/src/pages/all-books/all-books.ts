import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryService } from './../../providers/library-service';

@IonicPage()
@Component({
  selector: 'page-all-books',
  templateUrl: 'all-books.html',
})
export class AllBooks {

    books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public libraryService: LibraryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllBooks');
    this.getBooks();
  }
  getBooks(){
    this.libraryService.getBooks()
    .subscribe(res => 
    this.books = res);
  };

  goToBookDetails(book){
    this.navCtrl.push('BooksDetails', {book: book});
  };
}
