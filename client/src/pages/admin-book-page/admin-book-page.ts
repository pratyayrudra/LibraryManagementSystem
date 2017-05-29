import { LibraryService } from './../../providers/library-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Modal } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-book-page',
  templateUrl: 'admin-book-page.html',
})
export class AdminBookPage {

  books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public libraryService: LibraryService,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminBookPage');
    this.getBooks();
  }

  getBooks(){
    this.libraryService.getBooks()
      .subscribe(res => this.books = res);
  }

  goToBookDetails(book){
    this.navCtrl.push('AdminBookDetailPage', {book: book});
  };

  addNewBook(){
    let bookAddingModal: Modal = this.modalCtrl.create('BookAddingPage')

    bookAddingModal.present();
    bookAddingModal.onDidDismiss(res =>
    this.getBooks());
  };

}
